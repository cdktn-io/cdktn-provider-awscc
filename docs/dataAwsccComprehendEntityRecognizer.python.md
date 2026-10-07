# `dataAwsccComprehendEntityRecognizer` Submodule <a name="`dataAwsccComprehendEntityRecognizer` Submodule" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccComprehendEntityRecognizer <a name="DataAwsccComprehendEntityRecognizer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/comprehend_entity_recognizer awscc_comprehend_entity_recognizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/comprehend_entity_recognizer#id DataAwsccComprehendEntityRecognizer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccComprehendEntityRecognizer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccComprehendEntityRecognizer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccComprehendEntityRecognizer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccComprehendEntityRecognizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/comprehend_entity_recognizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccComprehendEntityRecognizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.dataAccessRoleArn">data_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.modelKmsKeyId">model_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.modelPolicy">model_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.recognizerName">recognizer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList">DataAwsccComprehendEntityRecognizerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference">DataAwsccComprehendEntityRecognizerVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `data_access_role_arn`<sup>Required</sup> <a name="data_access_role_arn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.dataAccessRoleArn"></a>

```python
data_access_role_arn: str
```

- *Type:* str

---

##### `input_data_config`<sup>Required</sup> <a name="input_data_config" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.inputDataConfig"></a>

```python
input_data_config: DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference</a>

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `model_kms_key_id`<sup>Required</sup> <a name="model_kms_key_id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.modelKmsKeyId"></a>

```python
model_kms_key_id: str
```

- *Type:* str

---

##### `model_policy`<sup>Required</sup> <a name="model_policy" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.modelPolicy"></a>

```python
model_policy: str
```

- *Type:* str

---

##### `recognizer_name`<sup>Required</sup> <a name="recognizer_name" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.recognizerName"></a>

```python
recognizer_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.tags"></a>

```python
tags: DataAwsccComprehendEntityRecognizerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList">DataAwsccComprehendEntityRecognizerTagsList</a>

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `volume_kms_key_id`<sup>Required</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.vpcConfig"></a>

```python
vpc_config: DataAwsccComprehendEntityRecognizerVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference">DataAwsccComprehendEntityRecognizerVpcConfigOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccComprehendEntityRecognizerConfig <a name="DataAwsccComprehendEntityRecognizerConfig" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/comprehend_entity_recognizer#id DataAwsccComprehendEntityRecognizer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccComprehendEntityRecognizerInputDataConfig <a name="DataAwsccComprehendEntityRecognizerInputDataConfig" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfig()
```


### DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations <a name="DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations()
```


### DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests <a name="DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests()
```


### DataAwsccComprehendEntityRecognizerInputDataConfigDocuments <a name="DataAwsccComprehendEntityRecognizerInputDataConfigDocuments" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocuments.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocuments()
```


### DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct <a name="DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct()
```


### DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes <a name="DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes()
```


### DataAwsccComprehendEntityRecognizerTags <a name="DataAwsccComprehendEntityRecognizerTags" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTags()
```


### DataAwsccComprehendEntityRecognizerVpcConfig <a name="DataAwsccComprehendEntityRecognizerVpcConfig" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference <a name="DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3Uri">test_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations">DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `test_s3_uri`<sup>Required</sup> <a name="test_s3_uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3Uri"></a>

```python
test_s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations">DataAwsccComprehendEntityRecognizerInputDataConfigAnnotations</a>

---


### DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList <a name="DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference <a name="DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri">annotation_data_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNames">attribute_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentType">document_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri">source_documents_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.split">split</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests">DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `annotation_data_s3_uri`<sup>Required</sup> <a name="annotation_data_s3_uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri"></a>

```python
annotation_data_s3_uri: str
```

- *Type:* str

---

##### `attribute_names`<sup>Required</sup> <a name="attribute_names" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNames"></a>

```python
attribute_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `document_type`<sup>Required</sup> <a name="document_type" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentType"></a>

```python
document_type: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `source_documents_s3_uri`<sup>Required</sup> <a name="source_documents_s3_uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri"></a>

```python
source_documents_s3_uri: str
```

- *Type:* str

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.split"></a>

```python
split: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests">DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>

---


### DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference <a name="DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormat">input_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3Uri">test_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocuments">DataAwsccComprehendEntityRecognizerInputDataConfigDocuments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_format`<sup>Required</sup> <a name="input_format" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `test_s3_uri`<sup>Required</sup> <a name="test_s3_uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3Uri"></a>

```python
test_s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccComprehendEntityRecognizerInputDataConfigDocuments
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocuments">DataAwsccComprehendEntityRecognizerInputDataConfigDocuments</a>

---


### DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference <a name="DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct">DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct">DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStruct</a>

---


### DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList <a name="DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference <a name="DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes">DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes">DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypes</a>

---


### DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference <a name="DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.annotations">annotations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifests">augmented_manifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList">DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormat">data_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.documents">documents</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.entityList">entity_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypes">entity_types</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList">DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfig">DataAwsccComprehendEntityRecognizerInputDataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.annotations"></a>

```python
annotations: DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference</a>

---

##### `augmented_manifests`<sup>Required</sup> <a name="augmented_manifests" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifests"></a>

```python
augmented_manifests: DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList">DataAwsccComprehendEntityRecognizerInputDataConfigAugmentedManifestsList</a>

---

##### `data_format`<sup>Required</sup> <a name="data_format" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormat"></a>

```python
data_format: str
```

- *Type:* str

---

##### `documents`<sup>Required</sup> <a name="documents" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.documents"></a>

```python
documents: DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigDocumentsOutputReference</a>

---

##### `entity_list`<sup>Required</sup> <a name="entity_list" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.entityList"></a>

```python
entity_list: DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference">DataAwsccComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference</a>

---

##### `entity_types`<sup>Required</sup> <a name="entity_types" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypes"></a>

```python
entity_types: DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList">DataAwsccComprehendEntityRecognizerInputDataConfigEntityTypesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccComprehendEntityRecognizerInputDataConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerInputDataConfig">DataAwsccComprehendEntityRecognizerInputDataConfig</a>

---


### DataAwsccComprehendEntityRecognizerTagsList <a name="DataAwsccComprehendEntityRecognizerTagsList" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccComprehendEntityRecognizerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccComprehendEntityRecognizerTagsOutputReference <a name="DataAwsccComprehendEntityRecognizerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTags">DataAwsccComprehendEntityRecognizerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccComprehendEntityRecognizerTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerTags">DataAwsccComprehendEntityRecognizerTags</a>

---


### DataAwsccComprehendEntityRecognizerVpcConfigOutputReference <a name="DataAwsccComprehendEntityRecognizerVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_comprehend_entity_recognizer

dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfig">DataAwsccComprehendEntityRecognizerVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccComprehendEntityRecognizerVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizer.DataAwsccComprehendEntityRecognizerVpcConfig">DataAwsccComprehendEntityRecognizerVpcConfig</a>

---



