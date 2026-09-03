# `dataAwsccWisdomKnowledgeBase` Submodule <a name="`dataAwsccWisdomKnowledgeBase` Submodule" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWisdomKnowledgeBase <a name="DataAwsccWisdomKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/wisdom_knowledge_base awscc_wisdom_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/wisdom_knowledge_base#id DataAwsccWisdomKnowledgeBase#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccWisdomKnowledgeBase resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccWisdomKnowledgeBase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccWisdomKnowledgeBase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccWisdomKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/wisdom_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWisdomKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.knowledgeBaseArn">knowledge_base_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.knowledgeBaseId">knowledge_base_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.knowledgeBaseType">knowledge_base_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.renderingConfiguration">rendering_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.serverSideEncryptionConfiguration">server_side_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.sourceConfiguration">source_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList">DataAwsccWisdomKnowledgeBaseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.vectorIngestionConfiguration">vector_ingestion_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `knowledge_base_arn`<sup>Required</sup> <a name="knowledge_base_arn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.knowledgeBaseArn"></a>

```python
knowledge_base_arn: str
```

- *Type:* str

---

##### `knowledge_base_id`<sup>Required</sup> <a name="knowledge_base_id" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.knowledgeBaseId"></a>

```python
knowledge_base_id: str
```

- *Type:* str

---

##### `knowledge_base_type`<sup>Required</sup> <a name="knowledge_base_type" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.knowledgeBaseType"></a>

```python
knowledge_base_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rendering_configuration`<sup>Required</sup> <a name="rendering_configuration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.renderingConfiguration"></a>

```python
rendering_configuration: DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference</a>

---

##### `server_side_encryption_configuration`<sup>Required</sup> <a name="server_side_encryption_configuration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.serverSideEncryptionConfiguration"></a>

```python
server_side_encryption_configuration: DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference</a>

---

##### `source_configuration`<sup>Required</sup> <a name="source_configuration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.sourceConfiguration"></a>

```python
source_configuration: DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.tags"></a>

```python
tags: DataAwsccWisdomKnowledgeBaseTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList">DataAwsccWisdomKnowledgeBaseTagsList</a>

---

##### `vector_ingestion_configuration`<sup>Required</sup> <a name="vector_ingestion_configuration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.vectorIngestionConfiguration"></a>

```python
vector_ingestion_configuration: DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWisdomKnowledgeBaseConfig <a name="DataAwsccWisdomKnowledgeBaseConfig" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/wisdom_knowledge_base#id DataAwsccWisdomKnowledgeBase#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWisdomKnowledgeBaseRenderingConfiguration <a name="DataAwsccWisdomKnowledgeBaseRenderingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfiguration()
```


### DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration <a name="DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration()
```


### DataAwsccWisdomKnowledgeBaseSourceConfiguration <a name="DataAwsccWisdomKnowledgeBaseSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfiguration()
```


### DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations()
```


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration()
```


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration()
```


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits()
```


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration()
```


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls()
```


### DataAwsccWisdomKnowledgeBaseTags <a name="DataAwsccWisdomKnowledgeBaseTags" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTags()
```


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration()
```


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration()
```


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration()
```


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration()
```


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations()
```


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration()
```


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration()
```


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration()
```


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.property.templateUri">template_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfiguration">DataAwsccWisdomKnowledgeBaseRenderingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `template_uri`<sup>Required</sup> <a name="template_uri" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.property.templateUri"></a>

```python
template_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseRenderingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfiguration">DataAwsccWisdomKnowledgeBaseRenderingConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration">DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration">DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.appIntegrationArn">app_integration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.objectFields">object_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations">DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_integration_arn`<sup>Required</sup> <a name="app_integration_arn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.appIntegrationArn"></a>

```python
app_integration_arn: str
```

- *Type:* str

---

##### `object_fields`<sup>Required</sup> <a name="object_fields" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.objectFields"></a>

```python
object_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations">DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations</a>

---


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.webCrawlerConfiguration">web_crawler_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `web_crawler_configuration`<sup>Required</sup> <a name="web_crawler_configuration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.webCrawlerConfiguration"></a>

```python
web_crawler_configuration: DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.rateLimit">rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.rateLimit"></a>

```python
rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits</a>

---


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlerLimits">crawler_limits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.exclusionFilters">exclusion_filters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.inclusionFilters">inclusion_filters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlConfiguration">url_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `crawler_limits`<sup>Required</sup> <a name="crawler_limits" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlerLimits"></a>

```python
crawler_limits: DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference</a>

---

##### `exclusion_filters`<sup>Required</sup> <a name="exclusion_filters" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.exclusionFilters"></a>

```python
exclusion_filters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `inclusion_filters`<sup>Required</sup> <a name="inclusion_filters" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.inclusionFilters"></a>

```python
inclusion_filters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `url_configuration`<sup>Required</sup> <a name="url_configuration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlConfiguration"></a>

```python
url_configuration: DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.seedUrls">seed_urls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `seed_urls`<sup>Required</sup> <a name="seed_urls" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.seedUrls"></a>

```python
seed_urls: DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a>

---


### DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.appIntegrations">app_integrations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.managedSourceConfiguration">managed_source_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfiguration">DataAwsccWisdomKnowledgeBaseSourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_integrations`<sup>Required</sup> <a name="app_integrations" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.appIntegrations"></a>

```python
app_integrations: DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference</a>

---

##### `managed_source_configuration`<sup>Required</sup> <a name="managed_source_configuration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.managedSourceConfiguration"></a>

```python
managed_source_configuration: DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfiguration">DataAwsccWisdomKnowledgeBaseSourceConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseTagsList <a name="DataAwsccWisdomKnowledgeBaseTagsList" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWisdomKnowledgeBaseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWisdomKnowledgeBaseTagsOutputReference <a name="DataAwsccWisdomKnowledgeBaseTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTags">DataAwsccWisdomKnowledgeBaseTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTags">DataAwsccWisdomKnowledgeBaseTags</a>

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.maxTokens">max_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.overlapPercentage">overlap_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_tokens`<sup>Required</sup> <a name="max_tokens" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.maxTokens"></a>

```python
max_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `overlap_percentage`<sup>Required</sup> <a name="overlap_percentage" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.overlapPercentage"></a>

```python
overlap_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.maxTokens">max_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_tokens`<sup>Required</sup> <a name="max_tokens" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.maxTokens"></a>

```python
max_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a>

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.levelConfigurations">level_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.overlapTokens">overlap_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `level_configurations`<sup>Required</sup> <a name="level_configurations" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.levelConfigurations"></a>

```python
level_configurations: DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList</a>

---

##### `overlap_tokens`<sup>Required</sup> <a name="overlap_tokens" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.overlapTokens"></a>

```python
overlap_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.chunkingStrategy">chunking_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fixedSizeChunkingConfiguration">fixed_size_chunking_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.hierarchicalChunkingConfiguration">hierarchical_chunking_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.semanticChunkingConfiguration">semantic_chunking_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chunking_strategy`<sup>Required</sup> <a name="chunking_strategy" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.chunkingStrategy"></a>

```python
chunking_strategy: str
```

- *Type:* str

---

##### `fixed_size_chunking_configuration`<sup>Required</sup> <a name="fixed_size_chunking_configuration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fixedSizeChunkingConfiguration"></a>

```python
fixed_size_chunking_configuration: DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference</a>

---

##### `hierarchical_chunking_configuration`<sup>Required</sup> <a name="hierarchical_chunking_configuration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.hierarchicalChunkingConfiguration"></a>

```python
hierarchical_chunking_configuration: DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference</a>

---

##### `semantic_chunking_configuration`<sup>Required</sup> <a name="semantic_chunking_configuration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.semanticChunkingConfiguration"></a>

```python
semantic_chunking_configuration: DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.breakpointPercentileThreshold">breakpoint_percentile_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.bufferSize">buffer_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.maxTokens">max_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `breakpoint_percentile_threshold`<sup>Required</sup> <a name="breakpoint_percentile_threshold" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.breakpointPercentileThreshold"></a>

```python
breakpoint_percentile_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `buffer_size`<sup>Required</sup> <a name="buffer_size" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.bufferSize"></a>

```python
buffer_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_tokens`<sup>Required</sup> <a name="max_tokens" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.maxTokens"></a>

```python
max_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.chunkingConfiguration">chunking_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.parsingConfiguration">parsing_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chunking_configuration`<sup>Required</sup> <a name="chunking_configuration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.chunkingConfiguration"></a>

```python
chunking_configuration: DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference</a>

---

##### `parsing_configuration`<sup>Required</sup> <a name="parsing_configuration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.parsingConfiguration"></a>

```python
parsing_configuration: DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.modelArn">model_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.parsingPrompt">parsing_prompt</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.modelArn"></a>

```python
model_arn: str
```

- *Type:* str

---

##### `parsing_prompt`<sup>Required</sup> <a name="parsing_prompt" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.parsingPrompt"></a>

```python
parsing_prompt: DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.parsingPromptText">parsing_prompt_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parsing_prompt_text`<sup>Required</sup> <a name="parsing_prompt_text" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.parsingPromptText"></a>

```python
parsing_prompt_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt</a>

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_knowledge_base

dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.bedrockFoundationModelConfiguration">bedrock_foundation_model_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.parsingStrategy">parsing_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bedrock_foundation_model_configuration`<sup>Required</sup> <a name="bedrock_foundation_model_configuration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.bedrockFoundationModelConfiguration"></a>

```python
bedrock_foundation_model_configuration: DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference</a>

---

##### `parsing_strategy`<sup>Required</sup> <a name="parsing_strategy" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.parsingStrategy"></a>

```python
parsing_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration</a>

---



