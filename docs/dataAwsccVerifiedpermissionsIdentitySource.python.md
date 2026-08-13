# `dataAwsccVerifiedpermissionsIdentitySource` Submodule <a name="`dataAwsccVerifiedpermissionsIdentitySource` Submodule" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccVerifiedpermissionsIdentitySource <a name="DataAwsccVerifiedpermissionsIdentitySource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/verifiedpermissions_identity_source awscc_verifiedpermissions_identity_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/verifiedpermissions_identity_source#id DataAwsccVerifiedpermissionsIdentitySource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccVerifiedpermissionsIdentitySource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccVerifiedpermissionsIdentitySource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccVerifiedpermissionsIdentitySource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccVerifiedpermissionsIdentitySource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/verifiedpermissions_identity_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccVerifiedpermissionsIdentitySource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.details">details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference">DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.identitySourceId">identity_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.policyStoreId">policy_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.principalEntityType">principal_entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.configuration"></a>

```python
configuration: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference</a>

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.details"></a>

```python
details: DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference">DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference</a>

---

##### `identity_source_id`<sup>Required</sup> <a name="identity_source_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.identitySourceId"></a>

```python
identity_source_id: str
```

- *Type:* str

---

##### `policy_store_id`<sup>Required</sup> <a name="policy_store_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.policyStoreId"></a>

```python
policy_store_id: str
```

- *Type:* str

---

##### `principal_entity_type`<sup>Required</sup> <a name="principal_entity_type" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.principalEntityType"></a>

```python
principal_entity_type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccVerifiedpermissionsIdentitySourceConfig <a name="DataAwsccVerifiedpermissionsIdentitySourceConfig" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/verifiedpermissions_identity_source#id DataAwsccVerifiedpermissionsIdentitySource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccVerifiedpermissionsIdentitySourceConfiguration <a name="DataAwsccVerifiedpermissionsIdentitySourceConfiguration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfiguration()
```


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration()
```


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration()
```


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration()
```


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration()
```


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection()
```


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly()
```


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly()
```


### DataAwsccVerifiedpermissionsIdentitySourceDetails <a name="DataAwsccVerifiedpermissionsIdentitySourceDetails" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.groupEntityType">group_entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_entity_type`<sup>Required</sup> <a name="group_entity_type" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.groupEntityType"></a>

```python
group_entity_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration</a>

---


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.clientIds">client_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.groupConfiguration">group_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.userPoolArn">user_pool_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_ids`<sup>Required</sup> <a name="client_ids" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.clientIds"></a>

```python
client_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_configuration`<sup>Required</sup> <a name="group_configuration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.groupConfiguration"></a>

```python
group_configuration: DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference</a>

---

##### `user_pool_arn`<sup>Required</sup> <a name="user_pool_arn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.userPoolArn"></a>

```python
user_pool_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration</a>

---


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupClaim">group_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupEntityType">group_entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_claim`<sup>Required</sup> <a name="group_claim" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupClaim"></a>

```python
group_claim: str
```

- *Type:* str

---

##### `group_entity_type`<sup>Required</sup> <a name="group_entity_type" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupEntityType"></a>

```python
group_entity_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration</a>

---


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.entityIdPrefix">entity_id_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.groupConfiguration">group_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.tokenSelection">token_selection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_id_prefix`<sup>Required</sup> <a name="entity_id_prefix" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.entityIdPrefix"></a>

```python
entity_id_prefix: str
```

- *Type:* str

---

##### `group_configuration`<sup>Required</sup> <a name="group_configuration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.groupConfiguration"></a>

```python
group_configuration: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference</a>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `token_selection`<sup>Required</sup> <a name="token_selection" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.tokenSelection"></a>

```python
token_selection: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration</a>

---


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.principalIdClaim">principal_id_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_id_claim`<sup>Required</sup> <a name="principal_id_claim" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.principalIdClaim"></a>

```python
principal_id_claim: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly</a>

---


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.clientIds">client_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.principalIdClaim">principal_id_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_ids`<sup>Required</sup> <a name="client_ids" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.clientIds"></a>

```python
client_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_id_claim`<sup>Required</sup> <a name="principal_id_claim" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.principalIdClaim"></a>

```python
principal_id_claim: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly</a>

---


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.accessTokenOnly">access_token_only</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.identityTokenOnly">identity_token_only</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token_only`<sup>Required</sup> <a name="access_token_only" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.accessTokenOnly"></a>

```python
access_token_only: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference</a>

---

##### `identity_token_only`<sup>Required</sup> <a name="identity_token_only" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.identityTokenOnly"></a>

```python
identity_token_only: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection</a>

---


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.cognitoUserPoolConfiguration">cognito_user_pool_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.openIdConnectConfiguration">open_id_connect_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cognito_user_pool_configuration`<sup>Required</sup> <a name="cognito_user_pool_configuration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.cognitoUserPoolConfiguration"></a>

```python
cognito_user_pool_configuration: DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference</a>

---

##### `open_id_connect_configuration`<sup>Required</sup> <a name="open_id_connect_configuration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.openIdConnectConfiguration"></a>

```python
open_id_connect_configuration: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsIdentitySourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfiguration</a>

---


### DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference <a name="DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_identity_source

dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.clientIds">client_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.openIdIssuer">open_id_issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.userPoolArn">user_pool_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetails">DataAwsccVerifiedpermissionsIdentitySourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_ids`<sup>Required</sup> <a name="client_ids" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.clientIds"></a>

```python
client_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

---

##### `open_id_issuer`<sup>Required</sup> <a name="open_id_issuer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.openIdIssuer"></a>

```python
open_id_issuer: str
```

- *Type:* str

---

##### `user_pool_arn`<sup>Required</sup> <a name="user_pool_arn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.userPoolArn"></a>

```python
user_pool_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsIdentitySourceDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetails">DataAwsccVerifiedpermissionsIdentitySourceDetails</a>

---



