# `dataAwsccDlmLifecyclePolicy` Submodule <a name="`dataAwsccDlmLifecyclePolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDlmLifecyclePolicy <a name="DataAwsccDlmLifecyclePolicy" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/dlm_lifecycle_policy awscc_dlm_lifecycle_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/dlm_lifecycle_policy#id DataAwsccDlmLifecyclePolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDlmLifecyclePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDlmLifecyclePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDlmLifecyclePolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDlmLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/dlm_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDlmLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.copyTags">copy_tags</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.createInterval">create_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.crossRegionCopyTargets">cross_region_copy_targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList">DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.defaultPolicy">default_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.exclusions">exclusions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference">DataAwsccDlmLifecyclePolicyExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.extendDeletion">extend_deletion</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.policyDetails">policy_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.retainInterval">retain_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList">DataAwsccDlmLifecyclePolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `copy_tags`<sup>Required</sup> <a name="copy_tags" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.copyTags"></a>

```python
copy_tags: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `create_interval`<sup>Required</sup> <a name="create_interval" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.createInterval"></a>

```python
create_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cross_region_copy_targets`<sup>Required</sup> <a name="cross_region_copy_targets" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.crossRegionCopyTargets"></a>

```python
cross_region_copy_targets: DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList">DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList</a>

---

##### `default_policy`<sup>Required</sup> <a name="default_policy" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.defaultPolicy"></a>

```python
default_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.exclusions"></a>

```python
exclusions: DataAwsccDlmLifecyclePolicyExclusionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference">DataAwsccDlmLifecyclePolicyExclusionsOutputReference</a>

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `extend_deletion`<sup>Required</sup> <a name="extend_deletion" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.extendDeletion"></a>

```python
extend_deletion: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `policy_details`<sup>Required</sup> <a name="policy_details" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.policyDetails"></a>

```python
policy_details: DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference</a>

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `retain_interval`<sup>Required</sup> <a name="retain_interval" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.retainInterval"></a>

```python
retain_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.tags"></a>

```python
tags: DataAwsccDlmLifecyclePolicyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList">DataAwsccDlmLifecyclePolicyTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDlmLifecyclePolicyConfig <a name="DataAwsccDlmLifecyclePolicyConfig" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/dlm_lifecycle_policy#id DataAwsccDlmLifecyclePolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDlmLifecyclePolicyCrossRegionCopyTargets <a name="DataAwsccDlmLifecyclePolicyCrossRegionCopyTargets" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargets()
```


### DataAwsccDlmLifecyclePolicyExclusions <a name="DataAwsccDlmLifecyclePolicyExclusions" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusions()
```


### DataAwsccDlmLifecyclePolicyExclusionsExcludeTags <a name="DataAwsccDlmLifecyclePolicyExclusionsExcludeTags" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTags()
```


### DataAwsccDlmLifecyclePolicyPolicyDetails <a name="DataAwsccDlmLifecyclePolicyPolicyDetails" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetails()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsActions <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsActions" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActions()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsEventSource <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsEventSource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSource()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParameters <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParameters" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParameters()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsExclusions <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsExclusions" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusions()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsParameters <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsParameters" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParameters()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedules <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedules" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedules()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRule <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRule()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRule <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRule()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRules <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRules" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRules()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTags <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTags" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTags()
```


### DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTags <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTags" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTags()
```


### DataAwsccDlmLifecyclePolicyTags <a name="DataAwsccDlmLifecyclePolicyTags" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList <a name="DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference <a name="DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.property.targetRegion">target_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargets">DataAwsccDlmLifecyclePolicyCrossRegionCopyTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_region`<sup>Required</sup> <a name="target_region" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.property.targetRegion"></a>

```python
target_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyCrossRegionCopyTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyCrossRegionCopyTargets">DataAwsccDlmLifecyclePolicyCrossRegionCopyTargets</a>

---


### DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList <a name="DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference <a name="DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTags">DataAwsccDlmLifecyclePolicyExclusionsExcludeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyExclusionsExcludeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTags">DataAwsccDlmLifecyclePolicyExclusionsExcludeTags</a>

---


### DataAwsccDlmLifecyclePolicyExclusionsOutputReference <a name="DataAwsccDlmLifecyclePolicyExclusionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.property.excludeBootVolumes">exclude_boot_volumes</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.property.excludeTags">exclude_tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList">DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.property.excludeVolumeTypes">exclude_volume_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusions">DataAwsccDlmLifecyclePolicyExclusions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_boot_volumes`<sup>Required</sup> <a name="exclude_boot_volumes" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.property.excludeBootVolumes"></a>

```python
exclude_boot_volumes: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `exclude_tags`<sup>Required</sup> <a name="exclude_tags" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.property.excludeTags"></a>

```python
exclude_tags: DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList">DataAwsccDlmLifecyclePolicyExclusionsExcludeTagsList</a>

---

##### `exclude_volume_types`<sup>Required</sup> <a name="exclude_volume_types" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.property.excludeVolumeTypes"></a>

```python
exclude_volume_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyExclusions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyExclusions">DataAwsccDlmLifecyclePolicyExclusions</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.property.cmkArn">cmk_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.property.encrypted">encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration">DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cmk_arn`<sup>Required</sup> <a name="cmk_arn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.property.cmkArn"></a>

```python
cmk_arn: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.property.encrypted"></a>

```python
encrypted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration">DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfiguration</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.property.retainRule">retain_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy">DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.property.encryptionConfiguration"></a>

```python
encryption_configuration: DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyEncryptionConfigurationOutputReference</a>

---

##### `retain_rule`<sup>Required</sup> <a name="retain_rule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.property.retainRule"></a>

```python
retain_rule: DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy">DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopy</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.property.intervalUnit">interval_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule">DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_unit`<sup>Required</sup> <a name="interval_unit" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.property.intervalUnit"></a>

```python
interval_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule">DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyRetainRule</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.property.crossRegionCopy">cross_region_copy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList">DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActions">DataAwsccDlmLifecyclePolicyPolicyDetailsActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cross_region_copy`<sup>Required</sup> <a name="cross_region_copy" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.property.crossRegionCopy"></a>

```python
cross_region_copy: DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList">DataAwsccDlmLifecyclePolicyPolicyDetailsActionsCrossRegionCopyList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActions">DataAwsccDlmLifecyclePolicyPolicyDetailsActions</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.property.targetRegion">target_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets">DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_region`<sup>Required</sup> <a name="target_region" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.property.targetRegion"></a>

```python
target_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets">DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargets</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSource">DataAwsccDlmLifecyclePolicyPolicyDetailsEventSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.parameters"></a>

```python
parameters: DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsEventSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSource">DataAwsccDlmLifecyclePolicyPolicyDetailsEventSource</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.descriptionRegex">description_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.snapshotOwner">snapshot_owner</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParameters">DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_regex`<sup>Required</sup> <a name="description_regex" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.descriptionRegex"></a>

```python
description_regex: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `snapshot_owner`<sup>Required</sup> <a name="snapshot_owner" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.snapshotOwner"></a>

```python
snapshot_owner: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParameters">DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceParameters</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags">DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags">DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTags</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.property.excludeBootVolumes">exclude_boot_volumes</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.property.excludeTags">exclude_tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList">DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.property.excludeVolumeTypes">exclude_volume_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusions">DataAwsccDlmLifecyclePolicyPolicyDetailsExclusions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_boot_volumes`<sup>Required</sup> <a name="exclude_boot_volumes" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.property.excludeBootVolumes"></a>

```python
exclude_boot_volumes: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `exclude_tags`<sup>Required</sup> <a name="exclude_tags" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.property.excludeTags"></a>

```python
exclude_tags: DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList">DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsExcludeTagsList</a>

---

##### `exclude_volume_types`<sup>Required</sup> <a name="exclude_volume_types" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.property.excludeVolumeTypes"></a>

```python
exclude_volume_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsExclusions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusions">DataAwsccDlmLifecyclePolicyPolicyDetailsExclusions</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList">DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.copyTags">copy_tags</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.createInterval">create_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.crossRegionCopyTargets">cross_region_copy_targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList">DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.eventSource">event_source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.exclusions">exclusions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.extendDeletion">extend_deletion</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.policyLanguage">policy_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceLocations">resource_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.retainInterval">retain_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.schedules">schedules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.targetTags">target_tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList">DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetails">DataAwsccDlmLifecyclePolicyPolicyDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.actions"></a>

```python
actions: DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList">DataAwsccDlmLifecyclePolicyPolicyDetailsActionsList</a>

---

##### `copy_tags`<sup>Required</sup> <a name="copy_tags" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.copyTags"></a>

```python
copy_tags: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `create_interval`<sup>Required</sup> <a name="create_interval" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.createInterval"></a>

```python
create_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cross_region_copy_targets`<sup>Required</sup> <a name="cross_region_copy_targets" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.crossRegionCopyTargets"></a>

```python
cross_region_copy_targets: DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList">DataAwsccDlmLifecyclePolicyPolicyDetailsCrossRegionCopyTargetsList</a>

---

##### `event_source`<sup>Required</sup> <a name="event_source" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.eventSource"></a>

```python
event_source: DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsEventSourceOutputReference</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.exclusions"></a>

```python
exclusions: DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsExclusionsOutputReference</a>

---

##### `extend_deletion`<sup>Required</sup> <a name="extend_deletion" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.extendDeletion"></a>

```python
extend_deletion: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.parameters"></a>

```python
parameters: DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference</a>

---

##### `policy_language`<sup>Required</sup> <a name="policy_language" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.policyLanguage"></a>

```python
policy_language: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `resource_locations`<sup>Required</sup> <a name="resource_locations" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceLocations"></a>

```python
resource_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `retain_interval`<sup>Required</sup> <a name="retain_interval" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.retainInterval"></a>

```python
retain_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.schedules"></a>

```python
schedules: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList</a>

---

##### `target_tags`<sup>Required</sup> <a name="target_tags" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.targetTags"></a>

```python
target_tags: DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList">DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetails">DataAwsccDlmLifecyclePolicyPolicyDetails</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags">DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags">DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTags</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.excludeBootVolume">exclude_boot_volume</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.excludeDataVolumeTags">exclude_data_volume_tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList">DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.noReboot">no_reboot</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParameters">DataAwsccDlmLifecyclePolicyPolicyDetailsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_boot_volume`<sup>Required</sup> <a name="exclude_boot_volume" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.excludeBootVolume"></a>

```python
exclude_boot_volume: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `exclude_data_volume_tags`<sup>Required</sup> <a name="exclude_data_volume_tags" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.excludeDataVolumeTags"></a>

```python
exclude_data_volume_tags: DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList">DataAwsccDlmLifecyclePolicyPolicyDetailsParametersExcludeDataVolumeTagsList</a>

---

##### `no_reboot`<sup>Required</sup> <a name="no_reboot" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.noReboot"></a>

```python
no_reboot: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsParameters">DataAwsccDlmLifecyclePolicyPolicyDetailsParameters</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.property.retainRule">retain_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retain_rule`<sup>Required</sup> <a name="retain_rule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.property.retainRule"></a>

```python
retain_rule: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRule</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.property.retentionArchiveTier">retention_archive_tier</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_archive_tier`<sup>Required</sup> <a name="retention_archive_tier" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.property.retentionArchiveTier"></a>

```python
retention_archive_tier: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRule</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.property.intervalUnit">interval_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_unit`<sup>Required</sup> <a name="interval_unit" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.property.intervalUnit"></a>

```python
interval_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTierOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleRetainRuleRetentionArchiveTier</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.property.intervalUnit">interval_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.property.scripts">scripts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.property.times">times</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRule">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_unit`<sup>Required</sup> <a name="interval_unit" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.property.intervalUnit"></a>

```python
interval_unit: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `scripts`<sup>Required</sup> <a name="scripts" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.property.scripts"></a>

```python
scripts: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList</a>

---

##### `times`<sup>Required</sup> <a name="times" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.property.times"></a>

```python
times: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRule">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRule</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.property.executeOperationOnScriptFailure">execute_operation_on_script_failure</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.property.executionHandler">execution_handler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.property.executionHandlerService">execution_handler_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.property.executionTimeout">execution_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.property.maximumRetryCount">maximum_retry_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.property.stages">stages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execute_operation_on_script_failure`<sup>Required</sup> <a name="execute_operation_on_script_failure" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.property.executeOperationOnScriptFailure"></a>

```python
execute_operation_on_script_failure: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `execution_handler`<sup>Required</sup> <a name="execution_handler" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.property.executionHandler"></a>

```python
execution_handler: str
```

- *Type:* str

---

##### `execution_handler_service`<sup>Required</sup> <a name="execution_handler_service" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.property.executionHandlerService"></a>

```python
execution_handler_service: str
```

- *Type:* str

---

##### `execution_timeout`<sup>Required</sup> <a name="execution_timeout" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.property.executionTimeout"></a>

```python
execution_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_count`<sup>Required</sup> <a name="maximum_retry_count" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.property.maximumRetryCount"></a>

```python
maximum_retry_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.property.stages"></a>

```python
stages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScriptsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleScripts</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.property.intervalUnit">interval_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_unit`<sup>Required</sup> <a name="interval_unit" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.property.intervalUnit"></a>

```python
interval_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRule</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.cmkArn">cmk_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.copyTags">copy_tags</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.deprecateRule">deprecate_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.encrypted">encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.retainRule">retain_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.targetRegion">target_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cmk_arn`<sup>Required</sup> <a name="cmk_arn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.cmkArn"></a>

```python
cmk_arn: str
```

- *Type:* str

---

##### `copy_tags`<sup>Required</sup> <a name="copy_tags" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.copyTags"></a>

```python
copy_tags: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `deprecate_rule`<sup>Required</sup> <a name="deprecate_rule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.deprecateRule"></a>

```python
deprecate_rule: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesDeprecateRuleOutputReference</a>

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.encrypted"></a>

```python
encrypted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `retain_rule`<sup>Required</sup> <a name="retain_rule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.retainRule"></a>

```python
retain_rule: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `target_region`<sup>Required</sup> <a name="target_region" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.targetRegion"></a>

```python
target_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRules</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.property.intervalUnit">interval_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_unit`<sup>Required</sup> <a name="interval_unit" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.property.intervalUnit"></a>

```python
interval_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesRetainRule</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.property.intervalUnit">interval_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_unit`<sup>Required</sup> <a name="interval_unit" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.property.intervalUnit"></a>

```python
interval_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRule</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.property.availabilityZoneIds">availability_zone_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.property.intervalUnit">interval_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_ids`<sup>Required</sup> <a name="availability_zone_ids" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.property.availabilityZoneIds"></a>

```python
availability_zone_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_unit`<sup>Required</sup> <a name="interval_unit" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.property.intervalUnit"></a>

```python
interval_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRule</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.archiveRule">archive_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.copyTags">copy_tags</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.createRule">create_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.crossRegionCopyRules">cross_region_copy_rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.deprecateRule">deprecate_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.fastRestoreRule">fast_restore_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.retainRule">retain_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.shareRules">share_rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.tagsToAdd">tags_to_add</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.variableTags">variable_tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedules">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_rule`<sup>Required</sup> <a name="archive_rule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.archiveRule"></a>

```python
archive_rule: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesArchiveRuleOutputReference</a>

---

##### `copy_tags`<sup>Required</sup> <a name="copy_tags" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.copyTags"></a>

```python
copy_tags: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `create_rule`<sup>Required</sup> <a name="create_rule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.createRule"></a>

```python
create_rule: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCreateRuleOutputReference</a>

---

##### `cross_region_copy_rules`<sup>Required</sup> <a name="cross_region_copy_rules" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.crossRegionCopyRules"></a>

```python
cross_region_copy_rules: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesCrossRegionCopyRulesList</a>

---

##### `deprecate_rule`<sup>Required</sup> <a name="deprecate_rule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.deprecateRule"></a>

```python
deprecate_rule: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesDeprecateRuleOutputReference</a>

---

##### `fast_restore_rule`<sup>Required</sup> <a name="fast_restore_rule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.fastRestoreRule"></a>

```python
fast_restore_rule: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesFastRestoreRuleOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retain_rule`<sup>Required</sup> <a name="retain_rule" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.retainRule"></a>

```python
retain_rule: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference</a>

---

##### `share_rules`<sup>Required</sup> <a name="share_rules" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.shareRules"></a>

```python
share_rules: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList</a>

---

##### `tags_to_add`<sup>Required</sup> <a name="tags_to_add" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.tagsToAdd"></a>

```python
tags_to_add: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList</a>

---

##### `variable_tags`<sup>Required</sup> <a name="variable_tags" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.variableTags"></a>

```python
variable_tags: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedules">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedules</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.property.intervalUnit">interval_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRule">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_unit`<sup>Required</sup> <a name="interval_unit" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.property.intervalUnit"></a>

```python
interval_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRule">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesRetainRule</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.property.targetAccounts">target_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.property.unshareInterval">unshare_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.property.unshareIntervalUnit">unshare_interval_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRules">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_accounts`<sup>Required</sup> <a name="target_accounts" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.property.targetAccounts"></a>

```python
target_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `unshare_interval`<sup>Required</sup> <a name="unshare_interval" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.property.unshareInterval"></a>

```python
unshare_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unshare_interval_unit`<sup>Required</sup> <a name="unshare_interval_unit" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.property.unshareIntervalUnit"></a>

```python
unshare_interval_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRules">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesShareRules</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAddOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesTagsToAdd</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTags">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTags">DataAwsccDlmLifecyclePolicyPolicyDetailsSchedulesVariableTags</a>

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference <a name="DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTags">DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTags">DataAwsccDlmLifecyclePolicyPolicyDetailsTargetTags</a>

---


### DataAwsccDlmLifecyclePolicyTagsList <a name="DataAwsccDlmLifecyclePolicyTagsList" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDlmLifecyclePolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDlmLifecyclePolicyTagsOutputReference <a name="DataAwsccDlmLifecyclePolicyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dlm_lifecycle_policy

dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTags">DataAwsccDlmLifecyclePolicyTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDlmLifecyclePolicyTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDlmLifecyclePolicy.DataAwsccDlmLifecyclePolicyTags">DataAwsccDlmLifecyclePolicyTags</a>

---



