# `dataAwsccAwsexternalanthropicWorkspace` Submodule <a name="`dataAwsccAwsexternalanthropicWorkspace` Submodule" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAwsexternalanthropicWorkspace <a name="DataAwsccAwsexternalanthropicWorkspace" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/awsexternalanthropic_workspace awscc_awsexternalanthropic_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_awsexternalanthropic_workspace

dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/awsexternalanthropic_workspace#id DataAwsccAwsexternalanthropicWorkspace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccAwsexternalanthropicWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_awsexternalanthropic_workspace

dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_awsexternalanthropic_workspace

dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_awsexternalanthropic_workspace

dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_awsexternalanthropic_workspace

dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccAwsexternalanthropicWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccAwsexternalanthropicWorkspace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccAwsexternalanthropicWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/awsexternalanthropic_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAwsexternalanthropicWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.dataResidency">data_residency</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference">DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList">DataAwsccAwsexternalanthropicWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `data_residency`<sup>Required</sup> <a name="data_residency" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.dataResidency"></a>

```python
data_residency: DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference">DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.tags"></a>

```python
tags: DataAwsccAwsexternalanthropicWorkspaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList">DataAwsccAwsexternalanthropicWorkspaceTagsList</a>

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAwsexternalanthropicWorkspaceConfig <a name="DataAwsccAwsexternalanthropicWorkspaceConfig" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_awsexternalanthropic_workspace

dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/awsexternalanthropic_workspace#id DataAwsccAwsexternalanthropicWorkspace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAwsexternalanthropicWorkspaceDataResidency <a name="DataAwsccAwsexternalanthropicWorkspaceDataResidency" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidency.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_awsexternalanthropic_workspace

dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidency()
```


### DataAwsccAwsexternalanthropicWorkspaceTags <a name="DataAwsccAwsexternalanthropicWorkspaceTags" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_awsexternalanthropic_workspace

dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference <a name="DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_awsexternalanthropic_workspace

dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeos">allowed_inference_geos</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeo">default_inference_geo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeo">workspace_geo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidency">DataAwsccAwsexternalanthropicWorkspaceDataResidency</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_inference_geos`<sup>Required</sup> <a name="allowed_inference_geos" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeos"></a>

```python
allowed_inference_geos: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_inference_geo`<sup>Required</sup> <a name="default_inference_geo" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeo"></a>

```python
default_inference_geo: str
```

- *Type:* str

---

##### `workspace_geo`<sup>Required</sup> <a name="workspace_geo" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeo"></a>

```python
workspace_geo: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAwsexternalanthropicWorkspaceDataResidency
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidency">DataAwsccAwsexternalanthropicWorkspaceDataResidency</a>

---


### DataAwsccAwsexternalanthropicWorkspaceTagsList <a name="DataAwsccAwsexternalanthropicWorkspaceTagsList" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_awsexternalanthropic_workspace

dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference <a name="DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_awsexternalanthropic_workspace

dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTags">DataAwsccAwsexternalanthropicWorkspaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAwsexternalanthropicWorkspaceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTags">DataAwsccAwsexternalanthropicWorkspaceTags</a>

---



