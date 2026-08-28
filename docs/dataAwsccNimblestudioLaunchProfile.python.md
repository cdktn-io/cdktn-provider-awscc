# `dataAwsccNimblestudioLaunchProfile` Submodule <a name="`dataAwsccNimblestudioLaunchProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNimblestudioLaunchProfile <a name="DataAwsccNimblestudioLaunchProfile" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/nimblestudio_launch_profile awscc_nimblestudio_launch_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_launch_profile

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/nimblestudio_launch_profile#id DataAwsccNimblestudioLaunchProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccNimblestudioLaunchProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_launch_profile

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_launch_profile

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_launch_profile

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_launch_profile

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccNimblestudioLaunchProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccNimblestudioLaunchProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccNimblestudioLaunchProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/nimblestudio_launch_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNimblestudioLaunchProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.ec2SubnetIds">ec2_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.launchProfileId">launch_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.launchProfileProtocolVersions">launch_profile_protocol_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.streamConfiguration">stream_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.studioComponentIds">studio_component_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.studioId">studio_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ec2_subnet_ids`<sup>Required</sup> <a name="ec2_subnet_ids" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.ec2SubnetIds"></a>

```python
ec2_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `launch_profile_id`<sup>Required</sup> <a name="launch_profile_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.launchProfileId"></a>

```python
launch_profile_id: str
```

- *Type:* str

---

##### `launch_profile_protocol_versions`<sup>Required</sup> <a name="launch_profile_protocol_versions" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.launchProfileProtocolVersions"></a>

```python
launch_profile_protocol_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `stream_configuration`<sup>Required</sup> <a name="stream_configuration" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.streamConfiguration"></a>

```python
stream_configuration: DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference</a>

---

##### `studio_component_ids`<sup>Required</sup> <a name="studio_component_ids" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.studioComponentIds"></a>

```python
studio_component_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `studio_id`<sup>Required</sup> <a name="studio_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.studioId"></a>

```python
studio_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNimblestudioLaunchProfileConfig <a name="DataAwsccNimblestudioLaunchProfileConfig" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_launch_profile

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/nimblestudio_launch_profile#id DataAwsccNimblestudioLaunchProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNimblestudioLaunchProfileStreamConfiguration <a name="DataAwsccNimblestudioLaunchProfileStreamConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_launch_profile

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfiguration()
```


### DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup <a name="DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_launch_profile

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup()
```


### DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage <a name="DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_launch_profile

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage()
```


### DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot <a name="DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_launch_profile

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot()
```


### DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration <a name="DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_launch_profile

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference <a name="DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_launch_profile

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.automaticTerminationMode">automatic_termination_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.clipboardMode">clipboard_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.ec2InstanceTypes">ec2_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxSessionLengthInMinutes">max_session_length_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxStoppedSessionLengthInMinutes">max_stopped_session_length_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionBackup">session_backup</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionPersistenceMode">session_persistence_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionStorage">session_storage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.streamingImageIds">streaming_image_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.volumeConfiguration">volume_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfiguration">DataAwsccNimblestudioLaunchProfileStreamConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatic_termination_mode`<sup>Required</sup> <a name="automatic_termination_mode" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.automaticTerminationMode"></a>

```python
automatic_termination_mode: str
```

- *Type:* str

---

##### `clipboard_mode`<sup>Required</sup> <a name="clipboard_mode" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.clipboardMode"></a>

```python
clipboard_mode: str
```

- *Type:* str

---

##### `ec2_instance_types`<sup>Required</sup> <a name="ec2_instance_types" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.ec2InstanceTypes"></a>

```python
ec2_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_session_length_in_minutes`<sup>Required</sup> <a name="max_session_length_in_minutes" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxSessionLengthInMinutes"></a>

```python
max_session_length_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_stopped_session_length_in_minutes`<sup>Required</sup> <a name="max_stopped_session_length_in_minutes" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxStoppedSessionLengthInMinutes"></a>

```python
max_stopped_session_length_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_backup`<sup>Required</sup> <a name="session_backup" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionBackup"></a>

```python
session_backup: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference</a>

---

##### `session_persistence_mode`<sup>Required</sup> <a name="session_persistence_mode" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionPersistenceMode"></a>

```python
session_persistence_mode: str
```

- *Type:* str

---

##### `session_storage`<sup>Required</sup> <a name="session_storage" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionStorage"></a>

```python
session_storage: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference</a>

---

##### `streaming_image_ids`<sup>Required</sup> <a name="streaming_image_ids" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.streamingImageIds"></a>

```python
streaming_image_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `volume_configuration`<sup>Required</sup> <a name="volume_configuration" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.volumeConfiguration"></a>

```python
volume_configuration: DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNimblestudioLaunchProfileStreamConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfiguration">DataAwsccNimblestudioLaunchProfileStreamConfiguration</a>

---


### DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference <a name="DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_launch_profile

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.maxBackupsToRetain">max_backups_to_retain</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_backups_to_retain`<sup>Required</sup> <a name="max_backups_to_retain" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.maxBackupsToRetain"></a>

```python
max_backups_to_retain: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup</a>

---


### DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference <a name="DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_launch_profile

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.mode">mode</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.root">root</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.mode"></a>

```python
mode: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `root`<sup>Required</sup> <a name="root" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.root"></a>

```python
root: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage</a>

---


### DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference <a name="DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_launch_profile

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.linux">linux</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.windows">windows</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linux`<sup>Required</sup> <a name="linux" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.linux"></a>

```python
linux: str
```

- *Type:* str

---

##### `windows`<sup>Required</sup> <a name="windows" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.windows"></a>

```python
windows: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a>

---


### DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference <a name="DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_launch_profile

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a>

---



