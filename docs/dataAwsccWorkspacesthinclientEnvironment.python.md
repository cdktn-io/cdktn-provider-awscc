# `dataAwsccWorkspacesthinclientEnvironment` Submodule <a name="`dataAwsccWorkspacesthinclientEnvironment` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspacesthinclientEnvironment <a name="DataAwsccWorkspacesthinclientEnvironment" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/workspacesthinclient_environment awscc_workspacesthinclient_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesthinclient_environment

dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/workspacesthinclient_environment#id DataAwsccWorkspacesthinclientEnvironment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccWorkspacesthinclientEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesthinclient_environment

dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesthinclient_environment

dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesthinclient_environment

dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesthinclient_environment

dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccWorkspacesthinclientEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccWorkspacesthinclientEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccWorkspacesthinclientEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/workspacesthinclient_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspacesthinclientEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.activationCode">activation_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.desiredSoftwareSetId">desired_software_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.desktopArn">desktop_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.desktopEndpoint">desktop_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.desktopType">desktop_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.deviceCreationTags">device_creation_tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList">DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference">DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.pendingSoftwareSetId">pending_software_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.pendingSoftwareSetVersion">pending_software_set_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.registeredDevicesCount">registered_devices_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.softwareSetComplianceStatus">software_set_compliance_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.softwareSetUpdateMode">software_set_update_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.softwareSetUpdateSchedule">software_set_update_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList">DataAwsccWorkspacesthinclientEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `activation_code`<sup>Required</sup> <a name="activation_code" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.activationCode"></a>

```python
activation_code: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `desired_software_set_id`<sup>Required</sup> <a name="desired_software_set_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.desiredSoftwareSetId"></a>

```python
desired_software_set_id: str
```

- *Type:* str

---

##### `desktop_arn`<sup>Required</sup> <a name="desktop_arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.desktopArn"></a>

```python
desktop_arn: str
```

- *Type:* str

---

##### `desktop_endpoint`<sup>Required</sup> <a name="desktop_endpoint" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.desktopEndpoint"></a>

```python
desktop_endpoint: str
```

- *Type:* str

---

##### `desktop_type`<sup>Required</sup> <a name="desktop_type" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.desktopType"></a>

```python
desktop_type: str
```

- *Type:* str

---

##### `device_creation_tags`<sup>Required</sup> <a name="device_creation_tags" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.deviceCreationTags"></a>

```python
device_creation_tags: DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList">DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList</a>

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.maintenanceWindow"></a>

```python
maintenance_window: DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference">DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pending_software_set_id`<sup>Required</sup> <a name="pending_software_set_id" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.pendingSoftwareSetId"></a>

```python
pending_software_set_id: str
```

- *Type:* str

---

##### `pending_software_set_version`<sup>Required</sup> <a name="pending_software_set_version" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.pendingSoftwareSetVersion"></a>

```python
pending_software_set_version: str
```

- *Type:* str

---

##### `registered_devices_count`<sup>Required</sup> <a name="registered_devices_count" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.registeredDevicesCount"></a>

```python
registered_devices_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `software_set_compliance_status`<sup>Required</sup> <a name="software_set_compliance_status" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.softwareSetComplianceStatus"></a>

```python
software_set_compliance_status: str
```

- *Type:* str

---

##### `software_set_update_mode`<sup>Required</sup> <a name="software_set_update_mode" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.softwareSetUpdateMode"></a>

```python
software_set_update_mode: str
```

- *Type:* str

---

##### `software_set_update_schedule`<sup>Required</sup> <a name="software_set_update_schedule" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.softwareSetUpdateSchedule"></a>

```python
software_set_update_schedule: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.tags"></a>

```python
tags: DataAwsccWorkspacesthinclientEnvironmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList">DataAwsccWorkspacesthinclientEnvironmentTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspacesthinclientEnvironmentConfig <a name="DataAwsccWorkspacesthinclientEnvironmentConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesthinclient_environment

dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/workspacesthinclient_environment#id DataAwsccWorkspacesthinclientEnvironment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags <a name="DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesthinclient_environment

dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags()
```


### DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow <a name="DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesthinclient_environment

dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow()
```


### DataAwsccWorkspacesthinclientEnvironmentTags <a name="DataAwsccWorkspacesthinclientEnvironmentTags" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesthinclient_environment

dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList <a name="DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesthinclient_environment

dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference <a name="DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesthinclient_environment

dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags">DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags">DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags</a>

---


### DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference <a name="DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesthinclient_environment

dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOf">apply_time_of</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeek">days_of_the_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHour">end_time_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinute">end_time_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHour">start_time_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinute">start_time_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow">DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_time_of`<sup>Required</sup> <a name="apply_time_of" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOf"></a>

```python
apply_time_of: str
```

- *Type:* str

---

##### `days_of_the_week`<sup>Required</sup> <a name="days_of_the_week" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeek"></a>

```python
days_of_the_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `end_time_hour`<sup>Required</sup> <a name="end_time_hour" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHour"></a>

```python
end_time_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time_minute`<sup>Required</sup> <a name="end_time_minute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinute"></a>

```python
end_time_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_hour`<sup>Required</sup> <a name="start_time_hour" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHour"></a>

```python
start_time_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_minute`<sup>Required</sup> <a name="start_time_minute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinute"></a>

```python
start_time_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow">DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow</a>

---


### DataAwsccWorkspacesthinclientEnvironmentTagsList <a name="DataAwsccWorkspacesthinclientEnvironmentTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesthinclient_environment

dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference <a name="DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_workspacesthinclient_environment

dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTags">DataAwsccWorkspacesthinclientEnvironmentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWorkspacesthinclientEnvironmentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesthinclientEnvironment.DataAwsccWorkspacesthinclientEnvironmentTags">DataAwsccWorkspacesthinclientEnvironmentTags</a>

---



