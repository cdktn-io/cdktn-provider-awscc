# `dataAwsccQuicksightKnowledgeBase` Submodule <a name="`dataAwsccQuicksightKnowledgeBase` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightKnowledgeBase <a name="DataAwsccQuicksightKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_knowledge_base awscc_quicksight_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_knowledge_base#id DataAwsccQuicksightKnowledgeBase#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightKnowledgeBase resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccQuicksightKnowledgeBase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccQuicksightKnowledgeBase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccQuicksightKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.accessControlConfiguration">access_control_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.dataSourceArn">data_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.documentCount">document_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.isEmailNotificationOptedForIngestionFailures">is_email_notification_opted_for_ingestion_failures</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseArn">knowledge_base_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseConfiguration">knowledge_base_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseSizeBytes">knowledge_base_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.mediaExtractionConfiguration">media_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList">DataAwsccQuicksightKnowledgeBasePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.primaryOwnerArn">primary_owner_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.primaryOwnerUsername">primary_owner_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList">DataAwsccQuicksightKnowledgeBaseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `access_control_configuration`<sup>Required</sup> <a name="access_control_configuration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.accessControlConfiguration"></a>

```python
access_control_configuration: DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference</a>

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `data_source_arn`<sup>Required</sup> <a name="data_source_arn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.dataSourceArn"></a>

```python
data_source_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `document_count`<sup>Required</sup> <a name="document_count" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.documentCount"></a>

```python
document_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_email_notification_opted_for_ingestion_failures`<sup>Required</sup> <a name="is_email_notification_opted_for_ingestion_failures" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.isEmailNotificationOptedForIngestionFailures"></a>

```python
is_email_notification_opted_for_ingestion_failures: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `knowledge_base_arn`<sup>Required</sup> <a name="knowledge_base_arn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseArn"></a>

```python
knowledge_base_arn: str
```

- *Type:* str

---

##### `knowledge_base_configuration`<sup>Required</sup> <a name="knowledge_base_configuration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseConfiguration"></a>

```python
knowledge_base_configuration: DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference</a>

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseId"></a>

```python
knowledge_base_id: str
```

- *Type:* str

---

##### `knowledge_base_size_bytes`<sup>Required</sup> <a name="knowledge_base_size_bytes" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseSizeBytes"></a>

```python
knowledge_base_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `media_extraction_configuration`<sup>Required</sup> <a name="media_extraction_configuration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.mediaExtractionConfiguration"></a>

```python
media_extraction_configuration: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.permissions"></a>

```python
permissions: DataAwsccQuicksightKnowledgeBasePermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList">DataAwsccQuicksightKnowledgeBasePermissionsList</a>

---

##### `primary_owner_arn`<sup>Required</sup> <a name="primary_owner_arn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.primaryOwnerArn"></a>

```python
primary_owner_arn: str
```

- *Type:* str

---

##### `primary_owner_username`<sup>Required</sup> <a name="primary_owner_username" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.primaryOwnerUsername"></a>

```python
primary_owner_username: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.tags"></a>

```python
tags: DataAwsccQuicksightKnowledgeBaseTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList">DataAwsccQuicksightKnowledgeBaseTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration <a name="DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration()
```


### DataAwsccQuicksightKnowledgeBaseConfig <a name="DataAwsccQuicksightKnowledgeBaseConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_knowledge_base#id DataAwsccQuicksightKnowledgeBase#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration <a name="DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration()
```


### DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration <a name="DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration()
```


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration()
```


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration()
```


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration()
```


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration()
```


### DataAwsccQuicksightKnowledgeBasePermissions <a name="DataAwsccQuicksightKnowledgeBasePermissions" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissions()
```


### DataAwsccQuicksightKnowledgeBaseTags <a name="DataAwsccQuicksightKnowledgeBaseTags" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.isAclEnabled">is_acl_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration">DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_acl_enabled`<sup>Required</sup> <a name="is_acl_enabled" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.isAclEnabled"></a>

```python
is_acl_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration">DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.templateConfiguration">template_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `template_configuration`<sup>Required</sup> <a name="template_configuration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.templateConfiguration"></a>

```python
template_configuration: DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.template">template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.template"></a>

```python
template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus">audio_extraction_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_extraction_status`<sup>Required</sup> <a name="audio_extraction_status" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus"></a>

```python
audio_extraction_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus">image_extraction_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_extraction_status`<sup>Required</sup> <a name="image_extraction_status" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus"></a>

```python
image_extraction_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration">audio_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration">image_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration">video_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_extraction_configuration`<sup>Required</sup> <a name="audio_extraction_configuration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration"></a>

```python
audio_extraction_configuration: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a>

---

##### `image_extraction_configuration`<sup>Required</sup> <a name="image_extraction_configuration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration"></a>

```python
image_extraction_configuration: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a>

---

##### `video_extraction_configuration`<sup>Required</sup> <a name="video_extraction_configuration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration"></a>

```python
video_extraction_configuration: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus">video_extraction_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionType">video_extraction_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `video_extraction_status`<sup>Required</sup> <a name="video_extraction_status" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus"></a>

```python
video_extraction_status: str
```

- *Type:* str

---

##### `video_extraction_type`<sup>Required</sup> <a name="video_extraction_type" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionType"></a>

```python
video_extraction_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBasePermissionsList <a name="DataAwsccQuicksightKnowledgeBasePermissionsList" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccQuicksightKnowledgeBasePermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccQuicksightKnowledgeBasePermissionsOutputReference <a name="DataAwsccQuicksightKnowledgeBasePermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissions">DataAwsccQuicksightKnowledgeBasePermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightKnowledgeBasePermissions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissions">DataAwsccQuicksightKnowledgeBasePermissions</a>

---


### DataAwsccQuicksightKnowledgeBaseTagsList <a name="DataAwsccQuicksightKnowledgeBaseTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccQuicksightKnowledgeBaseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccQuicksightKnowledgeBaseTagsOutputReference <a name="DataAwsccQuicksightKnowledgeBaseTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_knowledge_base

dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTags">DataAwsccQuicksightKnowledgeBaseTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightKnowledgeBaseTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTags">DataAwsccQuicksightKnowledgeBaseTags</a>

---



