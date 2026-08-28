# `dataAwsccSupportauthzSupportPermit` Submodule <a name="`dataAwsccSupportauthzSupportPermit` Submodule" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSupportauthzSupportPermit <a name="DataAwsccSupportauthzSupportPermit" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/supportauthz_support_permit awscc_supportauthz_support_permit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/supportauthz_support_permit#id DataAwsccSupportauthzSupportPermit#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSupportauthzSupportPermit resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSupportauthzSupportPermit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSupportauthzSupportPermit to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSupportauthzSupportPermit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/supportauthz_support_permit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSupportauthzSupportPermit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.permit">permit</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference">DataAwsccSupportauthzSupportPermitPermitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.permitId">permit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.signingKeyInfo">signing_key_info</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference">DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.supportCaseDisplayId">support_case_display_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList">DataAwsccSupportauthzSupportPermitTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permit`<sup>Required</sup> <a name="permit" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.permit"></a>

```python
permit: DataAwsccSupportauthzSupportPermitPermitOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference">DataAwsccSupportauthzSupportPermitPermitOutputReference</a>

---

##### `permit_id`<sup>Required</sup> <a name="permit_id" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.permitId"></a>

```python
permit_id: str
```

- *Type:* str

---

##### `signing_key_info`<sup>Required</sup> <a name="signing_key_info" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.signingKeyInfo"></a>

```python
signing_key_info: DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference">DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `support_case_display_id`<sup>Required</sup> <a name="support_case_display_id" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.supportCaseDisplayId"></a>

```python
support_case_display_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.tags"></a>

```python
tags: DataAwsccSupportauthzSupportPermitTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList">DataAwsccSupportauthzSupportPermitTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSupportauthzSupportPermitConfig <a name="DataAwsccSupportauthzSupportPermitConfig" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/supportauthz_support_permit#id DataAwsccSupportauthzSupportPermit#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSupportauthzSupportPermitPermit <a name="DataAwsccSupportauthzSupportPermitPermit" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermit.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermit()
```


### DataAwsccSupportauthzSupportPermitPermitActions <a name="DataAwsccSupportauthzSupportPermitPermitActions" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActions()
```


### DataAwsccSupportauthzSupportPermitPermitConditions <a name="DataAwsccSupportauthzSupportPermitPermitConditions" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditions()
```


### DataAwsccSupportauthzSupportPermitPermitResources <a name="DataAwsccSupportauthzSupportPermitPermitResources" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResources()
```


### DataAwsccSupportauthzSupportPermitSigningKeyInfo <a name="DataAwsccSupportauthzSupportPermitSigningKeyInfo" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfo()
```


### DataAwsccSupportauthzSupportPermitTags <a name="DataAwsccSupportauthzSupportPermitTags" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSupportauthzSupportPermitPermitActionsOutputReference <a name="DataAwsccSupportauthzSupportPermitPermitActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.allActions">all_actions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActions">DataAwsccSupportauthzSupportPermitPermitActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all_actions`<sup>Required</sup> <a name="all_actions" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.allActions"></a>

```python
all_actions: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSupportauthzSupportPermitPermitActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActions">DataAwsccSupportauthzSupportPermitPermitActions</a>

---


### DataAwsccSupportauthzSupportPermitPermitConditionsList <a name="DataAwsccSupportauthzSupportPermitPermitConditionsList" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference <a name="DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfter">allow_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.allowBefore">allow_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditions">DataAwsccSupportauthzSupportPermitPermitConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_after`<sup>Required</sup> <a name="allow_after" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfter"></a>

```python
allow_after: str
```

- *Type:* str

---

##### `allow_before`<sup>Required</sup> <a name="allow_before" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.allowBefore"></a>

```python
allow_before: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSupportauthzSupportPermitPermitConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditions">DataAwsccSupportauthzSupportPermitPermitConditions</a>

---


### DataAwsccSupportauthzSupportPermitPermitOutputReference <a name="DataAwsccSupportauthzSupportPermitPermitOutputReference" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference">DataAwsccSupportauthzSupportPermitPermitActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList">DataAwsccSupportauthzSupportPermitPermitConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference">DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermit">DataAwsccSupportauthzSupportPermitPermit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.actions"></a>

```python
actions: DataAwsccSupportauthzSupportPermitPermitActionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference">DataAwsccSupportauthzSupportPermitPermitActionsOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.conditions"></a>

```python
conditions: DataAwsccSupportauthzSupportPermitPermitConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList">DataAwsccSupportauthzSupportPermitPermitConditionsList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.resources"></a>

```python
resources: DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference">DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSupportauthzSupportPermitPermit
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermit">DataAwsccSupportauthzSupportPermitPermit</a>

---


### DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference <a name="DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegion">all_resources_in_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResources">DataAwsccSupportauthzSupportPermitPermitResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_resources_in_region`<sup>Required</sup> <a name="all_resources_in_region" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegion"></a>

```python
all_resources_in_region: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSupportauthzSupportPermitPermitResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResources">DataAwsccSupportauthzSupportPermitPermitResources</a>

---


### DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference <a name="DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfo">DataAwsccSupportauthzSupportPermitSigningKeyInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSupportauthzSupportPermitSigningKeyInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfo">DataAwsccSupportauthzSupportPermitSigningKeyInfo</a>

---


### DataAwsccSupportauthzSupportPermitTagsList <a name="DataAwsccSupportauthzSupportPermitTagsList" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSupportauthzSupportPermitTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSupportauthzSupportPermitTagsOutputReference <a name="DataAwsccSupportauthzSupportPermitTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_supportauthz_support_permit

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTags">DataAwsccSupportauthzSupportPermitTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSupportauthzSupportPermitTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTags">DataAwsccSupportauthzSupportPermitTags</a>

---



