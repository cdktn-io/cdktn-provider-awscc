# `dataAwsccFrauddetectorEventType` Submodule <a name="`dataAwsccFrauddetectorEventType` Submodule" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccFrauddetectorEventType <a name="DataAwsccFrauddetectorEventType" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/frauddetector_event_type awscc_frauddetector_event_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/frauddetector_event_type#id DataAwsccFrauddetectorEventType#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccFrauddetectorEventType resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccFrauddetectorEventType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccFrauddetectorEventType to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccFrauddetectorEventType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/frauddetector_event_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccFrauddetectorEventType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.entityTypes">entity_types</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList">DataAwsccFrauddetectorEventTypeEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.eventVariables">event_variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList">DataAwsccFrauddetectorEventTypeEventVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.labels">labels</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList">DataAwsccFrauddetectorEventTypeLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList">DataAwsccFrauddetectorEventTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `entity_types`<sup>Required</sup> <a name="entity_types" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.entityTypes"></a>

```python
entity_types: DataAwsccFrauddetectorEventTypeEntityTypesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList">DataAwsccFrauddetectorEventTypeEntityTypesList</a>

---

##### `event_variables`<sup>Required</sup> <a name="event_variables" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.eventVariables"></a>

```python
event_variables: DataAwsccFrauddetectorEventTypeEventVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList">DataAwsccFrauddetectorEventTypeEventVariablesList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.labels"></a>

```python
labels: DataAwsccFrauddetectorEventTypeLabelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList">DataAwsccFrauddetectorEventTypeLabelsList</a>

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.tags"></a>

```python
tags: DataAwsccFrauddetectorEventTypeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList">DataAwsccFrauddetectorEventTypeTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccFrauddetectorEventTypeConfig <a name="DataAwsccFrauddetectorEventTypeConfig" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/frauddetector_event_type#id DataAwsccFrauddetectorEventType#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccFrauddetectorEventTypeEntityTypes <a name="DataAwsccFrauddetectorEventTypeEntityTypes" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypes()
```


### DataAwsccFrauddetectorEventTypeEntityTypesTags <a name="DataAwsccFrauddetectorEventTypeEntityTypesTags" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTags()
```


### DataAwsccFrauddetectorEventTypeEventVariables <a name="DataAwsccFrauddetectorEventTypeEventVariables" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariables.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariables()
```


### DataAwsccFrauddetectorEventTypeEventVariablesTags <a name="DataAwsccFrauddetectorEventTypeEventVariablesTags" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTags()
```


### DataAwsccFrauddetectorEventTypeLabels <a name="DataAwsccFrauddetectorEventTypeLabels" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabels.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabels()
```


### DataAwsccFrauddetectorEventTypeLabelsTags <a name="DataAwsccFrauddetectorEventTypeLabelsTags" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTags()
```


### DataAwsccFrauddetectorEventTypeTags <a name="DataAwsccFrauddetectorEventTypeTags" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccFrauddetectorEventTypeEntityTypesList <a name="DataAwsccFrauddetectorEventTypeEntityTypesList" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccFrauddetectorEventTypeEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccFrauddetectorEventTypeEntityTypesOutputReference <a name="DataAwsccFrauddetectorEventTypeEntityTypesOutputReference" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.inline">inline</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList">DataAwsccFrauddetectorEventTypeEntityTypesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypes">DataAwsccFrauddetectorEventTypeEntityTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.inline"></a>

```python
inline: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.tags"></a>

```python
tags: DataAwsccFrauddetectorEventTypeEntityTypesTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList">DataAwsccFrauddetectorEventTypeEntityTypesTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFrauddetectorEventTypeEntityTypes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypes">DataAwsccFrauddetectorEventTypeEntityTypes</a>

---


### DataAwsccFrauddetectorEventTypeEntityTypesTagsList <a name="DataAwsccFrauddetectorEventTypeEntityTypesTagsList" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference <a name="DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTags">DataAwsccFrauddetectorEventTypeEntityTypesTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFrauddetectorEventTypeEntityTypesTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTags">DataAwsccFrauddetectorEventTypeEntityTypesTags</a>

---


### DataAwsccFrauddetectorEventTypeEventVariablesList <a name="DataAwsccFrauddetectorEventTypeEventVariablesList" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccFrauddetectorEventTypeEventVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccFrauddetectorEventTypeEventVariablesOutputReference <a name="DataAwsccFrauddetectorEventTypeEventVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.inline">inline</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList">DataAwsccFrauddetectorEventTypeEventVariablesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.variableType">variable_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariables">DataAwsccFrauddetectorEventTypeEventVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.inline"></a>

```python
inline: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.tags"></a>

```python
tags: DataAwsccFrauddetectorEventTypeEventVariablesTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList">DataAwsccFrauddetectorEventTypeEventVariablesTagsList</a>

---

##### `variable_type`<sup>Required</sup> <a name="variable_type" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.variableType"></a>

```python
variable_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFrauddetectorEventTypeEventVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariables">DataAwsccFrauddetectorEventTypeEventVariables</a>

---


### DataAwsccFrauddetectorEventTypeEventVariablesTagsList <a name="DataAwsccFrauddetectorEventTypeEventVariablesTagsList" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference <a name="DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTags">DataAwsccFrauddetectorEventTypeEventVariablesTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFrauddetectorEventTypeEventVariablesTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTags">DataAwsccFrauddetectorEventTypeEventVariablesTags</a>

---


### DataAwsccFrauddetectorEventTypeLabelsList <a name="DataAwsccFrauddetectorEventTypeLabelsList" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccFrauddetectorEventTypeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccFrauddetectorEventTypeLabelsOutputReference <a name="DataAwsccFrauddetectorEventTypeLabelsOutputReference" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.inline">inline</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList">DataAwsccFrauddetectorEventTypeLabelsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabels">DataAwsccFrauddetectorEventTypeLabels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.inline"></a>

```python
inline: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.tags"></a>

```python
tags: DataAwsccFrauddetectorEventTypeLabelsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList">DataAwsccFrauddetectorEventTypeLabelsTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFrauddetectorEventTypeLabels
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabels">DataAwsccFrauddetectorEventTypeLabels</a>

---


### DataAwsccFrauddetectorEventTypeLabelsTagsList <a name="DataAwsccFrauddetectorEventTypeLabelsTagsList" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference <a name="DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTags">DataAwsccFrauddetectorEventTypeLabelsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFrauddetectorEventTypeLabelsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTags">DataAwsccFrauddetectorEventTypeLabelsTags</a>

---


### DataAwsccFrauddetectorEventTypeTagsList <a name="DataAwsccFrauddetectorEventTypeTagsList" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccFrauddetectorEventTypeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccFrauddetectorEventTypeTagsOutputReference <a name="DataAwsccFrauddetectorEventTypeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_frauddetector_event_type

dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTags">DataAwsccFrauddetectorEventTypeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFrauddetectorEventTypeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTags">DataAwsccFrauddetectorEventTypeTags</a>

---



