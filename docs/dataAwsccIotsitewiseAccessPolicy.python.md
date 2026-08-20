# `dataAwsccIotsitewiseAccessPolicy` Submodule <a name="`dataAwsccIotsitewiseAccessPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotsitewiseAccessPolicy <a name="DataAwsccIotsitewiseAccessPolicy" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotsitewise_access_policy awscc_iotsitewise_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotsitewise_access_policy#id DataAwsccIotsitewiseAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccIotsitewiseAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccIotsitewiseAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccIotsitewiseAccessPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccIotsitewiseAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotsitewise_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotsitewiseAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.accessPolicyArn">access_policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.accessPolicyId">access_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.accessPolicyIdentity">access_policy_identity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference">DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.accessPolicyPermission">access_policy_permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.accessPolicyResource">access_policy_resource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference">DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `access_policy_arn`<sup>Required</sup> <a name="access_policy_arn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.accessPolicyArn"></a>

```python
access_policy_arn: str
```

- *Type:* str

---

##### `access_policy_id`<sup>Required</sup> <a name="access_policy_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.accessPolicyId"></a>

```python
access_policy_id: str
```

- *Type:* str

---

##### `access_policy_identity`<sup>Required</sup> <a name="access_policy_identity" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.accessPolicyIdentity"></a>

```python
access_policy_identity: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference">DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference</a>

---

##### `access_policy_permission`<sup>Required</sup> <a name="access_policy_permission" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.accessPolicyPermission"></a>

```python
access_policy_permission: str
```

- *Type:* str

---

##### `access_policy_resource`<sup>Required</sup> <a name="access_policy_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.accessPolicyResource"></a>

```python
access_policy_resource: DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference">DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity <a name="DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity()
```


### DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole <a name="DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole()
```


### DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser <a name="DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser()
```


### DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser <a name="DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser()
```


### DataAwsccIotsitewiseAccessPolicyAccessPolicyResource <a name="DataAwsccIotsitewiseAccessPolicyAccessPolicyResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResource()
```


### DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal <a name="DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal()
```


### DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject <a name="DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject()
```


### DataAwsccIotsitewiseAccessPolicyConfig <a name="DataAwsccIotsitewiseAccessPolicyConfig" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotsitewise_access_policy#id DataAwsccIotsitewiseAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference <a name="DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole">DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole">DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole</a>

---


### DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference <a name="DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser">DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser">DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser</a>

---


### DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference <a name="DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamRole">iam_role</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference">DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamUser">iam_user</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference">DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.user">user</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference">DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity">DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iam_role`<sup>Required</sup> <a name="iam_role" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamRole"></a>

```python
iam_role: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference">DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference</a>

---

##### `iam_user`<sup>Required</sup> <a name="iam_user" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.iamUser"></a>

```python
iam_user: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference">DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.user"></a>

```python
user: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference">DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity">DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity</a>

---


### DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference <a name="DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser">DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser">DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser</a>

---


### DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference <a name="DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.portal">portal</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference">DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.project">project</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference">DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResource">DataAwsccIotsitewiseAccessPolicyAccessPolicyResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `portal`<sup>Required</sup> <a name="portal" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.portal"></a>

```python
portal: DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference">DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference</a>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.project"></a>

```python
project: DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference">DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotsitewiseAccessPolicyAccessPolicyResource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResource">DataAwsccIotsitewiseAccessPolicyAccessPolicyResource</a>

---


### DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference <a name="DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal">DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal">DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal</a>

---


### DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference <a name="DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_access_policy

dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject">DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAccessPolicy.DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject">DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject</a>

---



