# `dataAwsccMediaconnectRouterInput` Submodule <a name="`dataAwsccMediaconnectRouterInput` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectRouterInput <a name="DataAwsccMediaconnectRouterInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/mediaconnect_router_input awscc_mediaconnect_router_input}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/mediaconnect_router_input#id DataAwsccMediaconnectRouterInput#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectRouterInput resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMediaconnectRouterInput resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMediaconnectRouterInput to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMediaconnectRouterInput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/mediaconnect_router_input#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectRouterInput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.contentQualityAnalysisConfiguration">content_quality_analysis_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.contentQualityAnalysisType">content_quality_analysis_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.inputType">input_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.maintenanceConfiguration">maintenance_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference">DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.maintenanceType">maintenance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.maximumBitrate">maximum_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.routedOutputs">routed_outputs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.routerInputId">router_input_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.routingScope">routing_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList">DataAwsccMediaconnectRouterInputTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.transitEncryption">transit_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference">DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.configuration"></a>

```python
configuration: DataAwsccMediaconnectRouterInputConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationOutputReference</a>

---

##### `content_quality_analysis_configuration`<sup>Required</sup> <a name="content_quality_analysis_configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.contentQualityAnalysisConfiguration"></a>

```python
content_quality_analysis_configuration: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference</a>

---

##### `content_quality_analysis_type`<sup>Required</sup> <a name="content_quality_analysis_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.contentQualityAnalysisType"></a>

```python
content_quality_analysis_type: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `input_type`<sup>Required</sup> <a name="input_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.inputType"></a>

```python
input_type: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `maintenance_configuration`<sup>Required</sup> <a name="maintenance_configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.maintenanceConfiguration"></a>

```python
maintenance_configuration: DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference">DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference</a>

---

##### `maintenance_type`<sup>Required</sup> <a name="maintenance_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.maintenanceType"></a>

```python
maintenance_type: str
```

- *Type:* str

---

##### `maximum_bitrate`<sup>Required</sup> <a name="maximum_bitrate" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.maximumBitrate"></a>

```python
maximum_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `routed_outputs`<sup>Required</sup> <a name="routed_outputs" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.routedOutputs"></a>

```python
routed_outputs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `router_input_id`<sup>Required</sup> <a name="router_input_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.routerInputId"></a>

```python
router_input_id: str
```

- *Type:* str

---

##### `routing_scope`<sup>Required</sup> <a name="routing_scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.routingScope"></a>

```python
routing_scope: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.tags"></a>

```python
tags: DataAwsccMediaconnectRouterInputTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList">DataAwsccMediaconnectRouterInputTagsList</a>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `transit_encryption`<sup>Required</sup> <a name="transit_encryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.transitEncryption"></a>

```python
transit_encryption: DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference">DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectRouterInputConfig <a name="DataAwsccMediaconnectRouterInputConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/mediaconnect_router_input#id DataAwsccMediaconnectRouterInput#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectRouterInputConfiguration <a name="DataAwsccMediaconnectRouterInputConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfiguration()
```


### DataAwsccMediaconnectRouterInputConfigurationFailover <a name="DataAwsccMediaconnectRouterInputConfigurationFailover" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailover"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailover.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailover()
```


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations()
```


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist()
```


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp()
```


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller()
```


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration()
```


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey()
```


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener()
```


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration()
```


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey()
```


### DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow <a name="DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow()
```


### DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption <a name="DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption()
```


### DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration <a name="DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration()
```


### DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager <a name="DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager()
```


### DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel <a name="DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel()
```


### DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption <a name="DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption()
```


### DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration <a name="DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration()
```


### DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager <a name="DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager()
```


### DataAwsccMediaconnectRouterInputConfigurationMerge <a name="DataAwsccMediaconnectRouterInputConfigurationMerge" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMerge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMerge.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMerge()
```


### DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations <a name="DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations()
```


### DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist <a name="DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist()
```


### DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp <a name="DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp()
```


### DataAwsccMediaconnectRouterInputConfigurationStandard <a name="DataAwsccMediaconnectRouterInputConfigurationStandard" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandard.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandard()
```


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration()
```


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist()
```


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp()
```


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller()
```


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration()
```


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey()
```


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener()
```


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration()
```


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey()
```


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration()
```


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel()
```


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames()
```


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames()
```


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio()
```


### DataAwsccMediaconnectRouterInputMaintenanceConfiguration <a name="DataAwsccMediaconnectRouterInputMaintenanceConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfiguration()
```


### DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime <a name="DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime()
```


### DataAwsccMediaconnectRouterInputTags <a name="DataAwsccMediaconnectRouterInputTags" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTags()
```


### DataAwsccMediaconnectRouterInputTransitEncryption <a name="DataAwsccMediaconnectRouterInputTransitEncryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryption()
```


### DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration <a name="DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration()
```


### DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager <a name="DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.networkInterfaceArn">network_interface_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.primarySourceIndex">primary_source_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.protocolConfigurations">protocol_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.sourcePriorityMode">source_priority_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailover">DataAwsccMediaconnectRouterInputConfigurationFailover</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_interface_arn`<sup>Required</sup> <a name="network_interface_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.networkInterfaceArn"></a>

```python
network_interface_arn: str
```

- *Type:* str

---

##### `primary_source_index`<sup>Required</sup> <a name="primary_source_index" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.primarySourceIndex"></a>

```python
primary_source_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_configurations`<sup>Required</sup> <a name="protocol_configurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.protocolConfigurations"></a>

```python
protocol_configurations: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList</a>

---

##### `source_priority_mode`<sup>Required</sup> <a name="source_priority_mode" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.sourcePriorityMode"></a>

```python
source_priority_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationFailover
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailover">DataAwsccMediaconnectRouterInputConfigurationFailover</a>

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.rist">rist</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.rtp">rtp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.srtCaller">srt_caller</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.srtListener">srt_listener</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rist`<sup>Required</sup> <a name="rist" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.rist"></a>

```python
rist: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference</a>

---

##### `rtp`<sup>Required</sup> <a name="rtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.rtp"></a>

```python
rtp: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference</a>

---

##### `srt_caller`<sup>Required</sup> <a name="srt_caller" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.srtCaller"></a>

```python
srt_caller: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference</a>

---

##### `srt_listener`<sup>Required</sup> <a name="srt_listener" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.srtListener"></a>

```python
srt_listener: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations</a>

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.recoveryLatencyMilliseconds">recovery_latency_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recovery_latency_milliseconds`<sup>Required</sup> <a name="recovery_latency_milliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.recoveryLatencyMilliseconds"></a>

```python
recovery_latency_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist</a>

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.forwardErrorCorrection">forward_error_correction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forward_error_correction`<sup>Required</sup> <a name="forward_error_correction" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.forwardErrorCorrection"></a>

```python
forward_error_correction: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp</a>

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey</a>

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.property.encryptionKey"></a>

```python
encryption_key: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration</a>

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.decryptionConfiguration">decryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.minimumLatencyMilliseconds">minimum_latency_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.sourceAddress">source_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.sourcePort">source_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `decryption_configuration`<sup>Required</sup> <a name="decryption_configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.decryptionConfiguration"></a>

```python
decryption_configuration: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference</a>

---

##### `minimum_latency_milliseconds`<sup>Required</sup> <a name="minimum_latency_milliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.minimumLatencyMilliseconds"></a>

```python
minimum_latency_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_address`<sup>Required</sup> <a name="source_address" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.sourceAddress"></a>

```python
source_address: str
```

- *Type:* str

---

##### `source_port`<sup>Required</sup> <a name="source_port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.sourcePort"></a>

```python
source_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller</a>

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey</a>

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.property.encryptionKey"></a>

```python
encryption_key: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration</a>

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.decryptionConfiguration">decryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.minimumLatencyMilliseconds">minimum_latency_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `decryption_configuration`<sup>Required</sup> <a name="decryption_configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.decryptionConfiguration"></a>

```python
decryption_configuration: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference</a>

---

##### `minimum_latency_milliseconds`<sup>Required</sup> <a name="minimum_latency_milliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.minimumLatencyMilliseconds"></a>

```python
minimum_latency_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.flowArn">flow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.flowOutputArn">flow_output_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.sourceTransitDecryption">source_transit_decryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

---

##### `flow_output_arn`<sup>Required</sup> <a name="flow_output_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.flowOutputArn"></a>

```python
flow_output_arn: str
```

- *Type:* str

---

##### `source_transit_decryption`<sup>Required</sup> <a name="source_transit_decryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.sourceTransitDecryption"></a>

```python
source_transit_decryption: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.automatic">automatic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.secretsManager">secrets_manager</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.automatic"></a>

```python
automatic: str
```

- *Type:* str

---

##### `secrets_manager`<sup>Required</sup> <a name="secrets_manager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.secretsManager"></a>

```python
secrets_manager: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.encryptionKeyConfiguration">encryption_key_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.encryptionKeyType">encryption_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_key_configuration`<sup>Required</sup> <a name="encryption_key_configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.encryptionKeyConfiguration"></a>

```python
encryption_key_configuration: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference</a>

---

##### `encryption_key_type`<sup>Required</sup> <a name="encryption_key_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.encryptionKeyType"></a>

```python
encryption_key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.mediaLiveChannelArn">media_live_channel_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.mediaLiveChannelOutputName">media_live_channel_output_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.mediaLivePipelineId">media_live_pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.sourceTransitDecryption">source_transit_decryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `media_live_channel_arn`<sup>Required</sup> <a name="media_live_channel_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.mediaLiveChannelArn"></a>

```python
media_live_channel_arn: str
```

- *Type:* str

---

##### `media_live_channel_output_name`<sup>Required</sup> <a name="media_live_channel_output_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.mediaLiveChannelOutputName"></a>

```python
media_live_channel_output_name: str
```

- *Type:* str

---

##### `media_live_pipeline_id`<sup>Required</sup> <a name="media_live_pipeline_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.mediaLivePipelineId"></a>

```python
media_live_pipeline_id: str
```

- *Type:* str

---

##### `source_transit_decryption`<sup>Required</sup> <a name="source_transit_decryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.sourceTransitDecryption"></a>

```python
source_transit_decryption: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.automatic">automatic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.secretsManager">secrets_manager</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.automatic"></a>

```python
automatic: str
```

- *Type:* str

---

##### `secrets_manager`<sup>Required</sup> <a name="secrets_manager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.secretsManager"></a>

```python
secrets_manager: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.encryptionKeyConfiguration">encryption_key_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.encryptionKeyType">encryption_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_key_configuration`<sup>Required</sup> <a name="encryption_key_configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.encryptionKeyConfiguration"></a>

```python
encryption_key_configuration: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference</a>

---

##### `encryption_key_type`<sup>Required</sup> <a name="encryption_key_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.encryptionKeyType"></a>

```python
encryption_key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.mergeRecoveryWindowMilliseconds">merge_recovery_window_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.networkInterfaceArn">network_interface_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.protocolConfigurations">protocol_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMerge">DataAwsccMediaconnectRouterInputConfigurationMerge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `merge_recovery_window_milliseconds`<sup>Required</sup> <a name="merge_recovery_window_milliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.mergeRecoveryWindowMilliseconds"></a>

```python
merge_recovery_window_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_interface_arn`<sup>Required</sup> <a name="network_interface_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.networkInterfaceArn"></a>

```python
network_interface_arn: str
```

- *Type:* str

---

##### `protocol_configurations`<sup>Required</sup> <a name="protocol_configurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.protocolConfigurations"></a>

```python
protocol_configurations: DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationMerge
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMerge">DataAwsccMediaconnectRouterInputConfigurationMerge</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList <a name="DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.rist">rist</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.rtp">rtp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rist`<sup>Required</sup> <a name="rist" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.rist"></a>

```python
rist: DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference</a>

---

##### `rtp`<sup>Required</sup> <a name="rtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.rtp"></a>

```python
rtp: DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.recoveryLatencyMilliseconds">recovery_latency_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recovery_latency_milliseconds`<sup>Required</sup> <a name="recovery_latency_milliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.recoveryLatencyMilliseconds"></a>

```python
recovery_latency_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.forwardErrorCorrection">forward_error_correction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forward_error_correction`<sup>Required</sup> <a name="forward_error_correction" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.forwardErrorCorrection"></a>

```python
forward_error_correction: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp</a>

---


### DataAwsccMediaconnectRouterInputConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.failover">failover</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.mediaConnectFlow">media_connect_flow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.mediaLiveChannel">media_live_channel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.merge">merge</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference">DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.standard">standard</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfiguration">DataAwsccMediaconnectRouterInputConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.failover"></a>

```python
failover: DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference</a>

---

##### `media_connect_flow`<sup>Required</sup> <a name="media_connect_flow" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.mediaConnectFlow"></a>

```python
media_connect_flow: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference</a>

---

##### `media_live_channel`<sup>Required</sup> <a name="media_live_channel" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.mediaLiveChannel"></a>

```python
media_live_channel: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference</a>

---

##### `merge`<sup>Required</sup> <a name="merge" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.merge"></a>

```python
merge: DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference">DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference</a>

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.standard"></a>

```python
standard: DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfiguration">DataAwsccMediaconnectRouterInputConfiguration</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.networkInterfaceArn">network_interface_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.protocolConfiguration">protocol_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandard">DataAwsccMediaconnectRouterInputConfigurationStandard</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_interface_arn`<sup>Required</sup> <a name="network_interface_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.networkInterfaceArn"></a>

```python
network_interface_arn: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `protocol_configuration`<sup>Required</sup> <a name="protocol_configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.protocolConfiguration"></a>

```python
protocol_configuration: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationStandard
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandard">DataAwsccMediaconnectRouterInputConfigurationStandard</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.rist">rist</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.rtp">rtp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller">srt_caller</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.srtListener">srt_listener</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rist`<sup>Required</sup> <a name="rist" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.rist"></a>

```python
rist: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference</a>

---

##### `rtp`<sup>Required</sup> <a name="rtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.rtp"></a>

```python
rtp: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference</a>

---

##### `srt_caller`<sup>Required</sup> <a name="srt_caller" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller"></a>

```python
srt_caller: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a>

---

##### `srt_listener`<sup>Required</sup> <a name="srt_listener" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.srtListener"></a>

```python
srt_listener: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.recoveryLatencyMilliseconds">recovery_latency_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recovery_latency_milliseconds`<sup>Required</sup> <a name="recovery_latency_milliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.recoveryLatencyMilliseconds"></a>

```python
recovery_latency_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrection">forward_error_correction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forward_error_correction`<sup>Required</sup> <a name="forward_error_correction" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrection"></a>

```python
forward_error_correction: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.property.encryptionKey"></a>

```python
encryption_key: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.decryptionConfiguration">decryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds">minimum_latency_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceAddress">source_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourcePort">source_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `decryption_configuration`<sup>Required</sup> <a name="decryption_configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.decryptionConfiguration"></a>

```python
decryption_configuration: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference</a>

---

##### `minimum_latency_milliseconds`<sup>Required</sup> <a name="minimum_latency_milliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds"></a>

```python
minimum_latency_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_address`<sup>Required</sup> <a name="source_address" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceAddress"></a>

```python
source_address: str
```

- *Type:* str

---

##### `source_port`<sup>Required</sup> <a name="source_port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourcePort"></a>

```python
source_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.property.encryptionKey"></a>

```python
encryption_key: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.decryptionConfiguration">decryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds">minimum_latency_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `decryption_configuration`<sup>Required</sup> <a name="decryption_configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.decryptionConfiguration"></a>

```python
decryption_configuration: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference</a>

---

##### `minimum_latency_milliseconds`<sup>Required</sup> <a name="minimum_latency_milliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds"></a>

```python
minimum_latency_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener</a>

---


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.thresholdSeconds">threshold_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `threshold_seconds`<sup>Required</sup> <a name="threshold_seconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.thresholdSeconds"></a>

```python
threshold_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames</a>

---


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.thresholdSeconds">threshold_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `threshold_seconds`<sup>Required</sup> <a name="threshold_seconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.thresholdSeconds"></a>

```python
threshold_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames</a>

---


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.blackFrames">black_frames</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.frozenFrames">frozen_frames</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.silentAudio">silent_audio</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `black_frames`<sup>Required</sup> <a name="black_frames" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.blackFrames"></a>

```python
black_frames: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference</a>

---

##### `frozen_frames`<sup>Required</sup> <a name="frozen_frames" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.frozenFrames"></a>

```python
frozen_frames: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference</a>

---

##### `silent_audio`<sup>Required</sup> <a name="silent_audio" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.silentAudio"></a>

```python
silent_audio: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel</a>

---


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.thresholdSeconds">threshold_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `threshold_seconds`<sup>Required</sup> <a name="threshold_seconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.thresholdSeconds"></a>

```python
threshold_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio</a>

---


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.property.contentLevel">content_level</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_level`<sup>Required</sup> <a name="content_level" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.property.contentLevel"></a>

```python
content_level: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration</a>

---


### DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.preferredDayTime">preferred_day_time</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference">DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfiguration">DataAwsccMediaconnectRouterInputMaintenanceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `preferred_day_time`<sup>Required</sup> <a name="preferred_day_time" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.preferredDayTime"></a>

```python
preferred_day_time: DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference">DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputMaintenanceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfiguration">DataAwsccMediaconnectRouterInputMaintenanceConfiguration</a>

---


### DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference <a name="DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime">DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime">DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime</a>

---


### DataAwsccMediaconnectRouterInputTagsList <a name="DataAwsccMediaconnectRouterInputTagsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediaconnectRouterInputTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediaconnectRouterInputTagsOutputReference <a name="DataAwsccMediaconnectRouterInputTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTags">DataAwsccMediaconnectRouterInputTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTags">DataAwsccMediaconnectRouterInputTags</a>

---


### DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic">automatic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager">secrets_manager</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic"></a>

```python
automatic: str
```

- *Type:* str

---

##### `secrets_manager`<sup>Required</sup> <a name="secrets_manager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager"></a>

```python
secrets_manager: DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration</a>

---


### DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference <a name="DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---


### DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference <a name="DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_router_input

dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.encryptionKeyConfiguration">encryption_key_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.encryptionKeyType">encryption_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryption">DataAwsccMediaconnectRouterInputTransitEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_key_configuration`<sup>Required</sup> <a name="encryption_key_configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.encryptionKeyConfiguration"></a>

```python
encryption_key_configuration: DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference</a>

---

##### `encryption_key_type`<sup>Required</sup> <a name="encryption_key_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.encryptionKeyType"></a>

```python
encryption_key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectRouterInputTransitEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryption">DataAwsccMediaconnectRouterInputTransitEncryption</a>

---



