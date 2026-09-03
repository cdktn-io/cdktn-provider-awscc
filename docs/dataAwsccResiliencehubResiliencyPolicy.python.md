# `dataAwsccResiliencehubResiliencyPolicy` Submodule <a name="`dataAwsccResiliencehubResiliencyPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccResiliencehubResiliencyPolicy <a name="DataAwsccResiliencehubResiliencyPolicy" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/resiliencehub_resiliency_policy awscc_resiliencehub_resiliency_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehub_resiliency_policy

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/resiliencehub_resiliency_policy#id DataAwsccResiliencehubResiliencyPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccResiliencehubResiliencyPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehub_resiliency_policy

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehub_resiliency_policy

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehub_resiliency_policy

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehub_resiliency_policy

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccResiliencehubResiliencyPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccResiliencehubResiliencyPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccResiliencehubResiliencyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/resiliencehub_resiliency_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccResiliencehubResiliencyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.dataLocationConstraint">data_location_constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.policyArn">policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.policyDescription">policy_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `data_location_constraint`<sup>Required</sup> <a name="data_location_constraint" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.dataLocationConstraint"></a>

```python
data_location_constraint: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.policy"></a>

```python
policy: DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference</a>

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

---

##### `policy_description`<sup>Required</sup> <a name="policy_description" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.policyDescription"></a>

```python
policy_description: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccResiliencehubResiliencyPolicyConfig <a name="DataAwsccResiliencehubResiliencyPolicyConfig" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehub_resiliency_policy

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/resiliencehub_resiliency_policy#id DataAwsccResiliencehubResiliencyPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccResiliencehubResiliencyPolicyPolicy <a name="DataAwsccResiliencehubResiliencyPolicyPolicy" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehub_resiliency_policy

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicy()
```


### DataAwsccResiliencehubResiliencyPolicyPolicyAz <a name="DataAwsccResiliencehubResiliencyPolicyPolicyAz" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAz"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAz.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehub_resiliency_policy

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAz()
```


### DataAwsccResiliencehubResiliencyPolicyPolicyHardware <a name="DataAwsccResiliencehubResiliencyPolicyPolicyHardware" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardware"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardware.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehub_resiliency_policy

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardware()
```


### DataAwsccResiliencehubResiliencyPolicyPolicyRegion <a name="DataAwsccResiliencehubResiliencyPolicyPolicyRegion" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegion.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehub_resiliency_policy

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegion()
```


### DataAwsccResiliencehubResiliencyPolicyPolicySoftware <a name="DataAwsccResiliencehubResiliencyPolicyPolicySoftware" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftware"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftware.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehub_resiliency_policy

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftware()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference <a name="DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehub_resiliency_policy

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInSecs">rpo_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInSecs">rto_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAz">DataAwsccResiliencehubResiliencyPolicyPolicyAz</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rpo_in_secs`<sup>Required</sup> <a name="rpo_in_secs" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInSecs"></a>

```python
rpo_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rto_in_secs`<sup>Required</sup> <a name="rto_in_secs" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInSecs"></a>

```python
rto_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubResiliencyPolicyPolicyAz
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAz">DataAwsccResiliencehubResiliencyPolicyPolicyAz</a>

---


### DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference <a name="DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehub_resiliency_policy

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInSecs">rpo_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInSecs">rto_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardware">DataAwsccResiliencehubResiliencyPolicyPolicyHardware</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rpo_in_secs`<sup>Required</sup> <a name="rpo_in_secs" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInSecs"></a>

```python
rpo_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rto_in_secs`<sup>Required</sup> <a name="rto_in_secs" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInSecs"></a>

```python
rto_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubResiliencyPolicyPolicyHardware
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardware">DataAwsccResiliencehubResiliencyPolicyPolicyHardware</a>

---


### DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference <a name="DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehub_resiliency_policy

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.az">az</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.hardware">hardware</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.region">region</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttribute">software_attribute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicy">DataAwsccResiliencehubResiliencyPolicyPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `az`<sup>Required</sup> <a name="az" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.az"></a>

```python
az: DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference</a>

---

##### `hardware`<sup>Required</sup> <a name="hardware" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.hardware"></a>

```python
hardware: DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.region"></a>

```python
region: DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference</a>

---

##### `software_attribute`<sup>Required</sup> <a name="software_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttribute"></a>

```python
software_attribute: DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubResiliencyPolicyPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicy">DataAwsccResiliencehubResiliencyPolicyPolicy</a>

---


### DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference <a name="DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehub_resiliency_policy

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInSecs">rpo_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInSecs">rto_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegion">DataAwsccResiliencehubResiliencyPolicyPolicyRegion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rpo_in_secs`<sup>Required</sup> <a name="rpo_in_secs" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInSecs"></a>

```python
rpo_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rto_in_secs`<sup>Required</sup> <a name="rto_in_secs" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInSecs"></a>

```python
rto_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubResiliencyPolicyPolicyRegion
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegion">DataAwsccResiliencehubResiliencyPolicyPolicyRegion</a>

---


### DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference <a name="DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehub_resiliency_policy

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInSecs">rpo_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInSecs">rto_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftware">DataAwsccResiliencehubResiliencyPolicyPolicySoftware</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rpo_in_secs`<sup>Required</sup> <a name="rpo_in_secs" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInSecs"></a>

```python
rpo_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rto_in_secs`<sup>Required</sup> <a name="rto_in_secs" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInSecs"></a>

```python
rto_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubResiliencyPolicyPolicySoftware
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftware">DataAwsccResiliencehubResiliencyPolicyPolicySoftware</a>

---



