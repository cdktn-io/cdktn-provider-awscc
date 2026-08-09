# `dataAwsccSsmincidentsResponsePlan` Submodule <a name="`dataAwsccSsmincidentsResponsePlan` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmincidentsResponsePlan <a name="DataAwsccSsmincidentsResponsePlan" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ssmincidents_response_plan awscc_ssmincidents_response_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ssmincidents_response_plan#id DataAwsccSsmincidentsResponsePlan#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSsmincidentsResponsePlan resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSsmincidentsResponsePlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSsmincidentsResponsePlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSsmincidentsResponsePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ssmincidents_response_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmincidentsResponsePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList">DataAwsccSsmincidentsResponsePlanActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.chatChannel">chat_channel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference">DataAwsccSsmincidentsResponsePlanChatChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.engagements">engagements</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.incidentTemplate">incident_template</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference">DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.integrations">integrations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList">DataAwsccSsmincidentsResponsePlanIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList">DataAwsccSsmincidentsResponsePlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.actions"></a>

```python
actions: DataAwsccSsmincidentsResponsePlanActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList">DataAwsccSsmincidentsResponsePlanActionsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `chat_channel`<sup>Required</sup> <a name="chat_channel" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.chatChannel"></a>

```python
chat_channel: DataAwsccSsmincidentsResponsePlanChatChannelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference">DataAwsccSsmincidentsResponsePlanChatChannelOutputReference</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `engagements`<sup>Required</sup> <a name="engagements" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.engagements"></a>

```python
engagements: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `incident_template`<sup>Required</sup> <a name="incident_template" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.incidentTemplate"></a>

```python
incident_template: DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference">DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference</a>

---

##### `integrations`<sup>Required</sup> <a name="integrations" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.integrations"></a>

```python
integrations: DataAwsccSsmincidentsResponsePlanIntegrationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList">DataAwsccSsmincidentsResponsePlanIntegrationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.tags"></a>

```python
tags: DataAwsccSsmincidentsResponsePlanTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList">DataAwsccSsmincidentsResponsePlanTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmincidentsResponsePlanActions <a name="DataAwsccSsmincidentsResponsePlanActions" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActions()
```


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomation <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomation" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomation()
```


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters()
```


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue()
```


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters()
```


### DataAwsccSsmincidentsResponsePlanChatChannel <a name="DataAwsccSsmincidentsResponsePlanChatChannel" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannel.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannel()
```


### DataAwsccSsmincidentsResponsePlanConfig <a name="DataAwsccSsmincidentsResponsePlanConfig" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ssmincidents_response_plan#id DataAwsccSsmincidentsResponsePlan#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsmincidentsResponsePlanIncidentTemplate <a name="DataAwsccSsmincidentsResponsePlanIncidentTemplate" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplate()
```


### DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags <a name="DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags()
```


### DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets <a name="DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets()
```


### DataAwsccSsmincidentsResponsePlanIntegrations <a name="DataAwsccSsmincidentsResponsePlanIntegrations" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrations()
```


### DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration <a name="DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration()
```


### DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration <a name="DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration()
```


### DataAwsccSsmincidentsResponsePlanTags <a name="DataAwsccSsmincidentsResponsePlanTags" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsmincidentsResponsePlanActionsList <a name="DataAwsccSsmincidentsResponsePlanActionsList" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSsmincidentsResponsePlanActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSsmincidentsResponsePlanActionsOutputReference <a name="DataAwsccSsmincidentsResponsePlanActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.property.ssmAutomation">ssm_automation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActions">DataAwsccSsmincidentsResponsePlanActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssm_automation`<sup>Required</sup> <a name="ssm_automation" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.property.ssmAutomation"></a>

```python
ssm_automation: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmincidentsResponsePlanActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActions">DataAwsccSsmincidentsResponsePlanActions</a>

---


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.value"></a>

```python
value: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters</a>

---


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variable">variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variable"></a>

```python
variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a>

---


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentName">document_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersion">document_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParameters">dynamic_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccount">target_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomation">DataAwsccSsmincidentsResponsePlanActionsSsmAutomation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `document_name`<sup>Required</sup> <a name="document_name" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentName"></a>

```python
document_name: str
```

- *Type:* str

---

##### `document_version`<sup>Required</sup> <a name="document_version" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersion"></a>

```python
document_version: str
```

- *Type:* str

---

##### `dynamic_parameters`<sup>Required</sup> <a name="dynamic_parameters" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParameters"></a>

```python
dynamic_parameters: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parameters"></a>

```python
parameters: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `target_account`<sup>Required</sup> <a name="target_account" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccount"></a>

```python
target_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmincidentsResponsePlanActionsSsmAutomation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomation">DataAwsccSsmincidentsResponsePlanActionsSsmAutomation</a>

---


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference <a name="DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters">DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters</a>

---


### DataAwsccSsmincidentsResponsePlanChatChannelOutputReference <a name="DataAwsccSsmincidentsResponsePlanChatChannelOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSns">chatbot_sns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannel">DataAwsccSsmincidentsResponsePlanChatChannel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chatbot_sns`<sup>Required</sup> <a name="chatbot_sns" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSns"></a>

```python
chatbot_sns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannelOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmincidentsResponsePlanChatChannel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanChatChannel">DataAwsccSsmincidentsResponsePlanChatChannel</a>

---


### DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList <a name="DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference <a name="DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags">DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags">DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags</a>

---


### DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList <a name="DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference <a name="DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets">DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets">DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets</a>

---


### DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference <a name="DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString">dedupe_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact">impact</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags">incident_tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList">DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargets">notification_targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList">DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplate">DataAwsccSsmincidentsResponsePlanIncidentTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dedupe_string`<sup>Required</sup> <a name="dedupe_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString"></a>

```python
dedupe_string: str
```

- *Type:* str

---

##### `impact`<sup>Required</sup> <a name="impact" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact"></a>

```python
impact: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `incident_tags`<sup>Required</sup> <a name="incident_tags" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags"></a>

```python
incident_tags: DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList">DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList</a>

---

##### `notification_targets`<sup>Required</sup> <a name="notification_targets" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargets"></a>

```python
notification_targets: DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList">DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList</a>

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmincidentsResponsePlanIncidentTemplate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIncidentTemplate">DataAwsccSsmincidentsResponsePlanIncidentTemplate</a>

---


### DataAwsccSsmincidentsResponsePlanIntegrationsList <a name="DataAwsccSsmincidentsResponsePlanIntegrationsList" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference <a name="DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfiguration">pager_duty_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference">DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrations">DataAwsccSsmincidentsResponsePlanIntegrations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pager_duty_configuration`<sup>Required</sup> <a name="pager_duty_configuration" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfiguration"></a>

```python
pager_duty_configuration: DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference">DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmincidentsResponsePlanIntegrations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrations">DataAwsccSsmincidentsResponsePlanIntegrations</a>

---


### DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference <a name="DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfiguration">pager_duty_incident_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference">DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pager_duty_incident_configuration`<sup>Required</sup> <a name="pager_duty_incident_configuration" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfiguration"></a>

```python
pager_duty_incident_configuration: DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference">DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference</a>

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a>

---


### DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference <a name="DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a>

---


### DataAwsccSsmincidentsResponsePlanTagsList <a name="DataAwsccSsmincidentsResponsePlanTagsList" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSsmincidentsResponsePlanTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSsmincidentsResponsePlanTagsOutputReference <a name="DataAwsccSsmincidentsResponsePlanTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssmincidents_response_plan

dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTags">DataAwsccSsmincidentsResponsePlanTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmincidentsResponsePlanTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmincidentsResponsePlan.DataAwsccSsmincidentsResponsePlanTags">DataAwsccSsmincidentsResponsePlanTags</a>

---



