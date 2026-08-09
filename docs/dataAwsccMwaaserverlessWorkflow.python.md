# `dataAwsccMwaaserverlessWorkflow` Submodule <a name="`dataAwsccMwaaserverlessWorkflow` Submodule" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMwaaserverlessWorkflow <a name="DataAwsccMwaaserverlessWorkflow" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mwaaserverless_workflow awscc_mwaaserverless_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaaserverless_workflow

dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mwaaserverless_workflow#id DataAwsccMwaaserverlessWorkflow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMwaaserverlessWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaaserverless_workflow

dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaaserverless_workflow

dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaaserverless_workflow

dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaaserverless_workflow

dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMwaaserverlessWorkflow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMwaaserverlessWorkflow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMwaaserverlessWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mwaaserverless_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMwaaserverlessWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.definitionS3Location">definition_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference">DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference">DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference">DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference">DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.scheduleConfiguration">schedule_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference">DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.triggerMode">trigger_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.workflowArn">workflow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.workflowStatus">workflow_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.workflowVersion">workflow_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `definition_s3_location`<sup>Required</sup> <a name="definition_s3_location" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.definitionS3Location"></a>

```python
definition_s3_location: DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference">DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.encryptionConfiguration"></a>

```python
encryption_configuration: DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference">DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference</a>

---

##### `logging_configuration`<sup>Required</sup> <a name="logging_configuration" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.loggingConfiguration"></a>

```python
logging_configuration: DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference">DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference</a>

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.networkConfiguration"></a>

```python
network_configuration: DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference">DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `schedule_configuration`<sup>Required</sup> <a name="schedule_configuration" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.scheduleConfiguration"></a>

```python
schedule_configuration: DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference">DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `trigger_mode`<sup>Required</sup> <a name="trigger_mode" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.triggerMode"></a>

```python
trigger_mode: str
```

- *Type:* str

---

##### `workflow_arn`<sup>Required</sup> <a name="workflow_arn" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.workflowArn"></a>

```python
workflow_arn: str
```

- *Type:* str

---

##### `workflow_status`<sup>Required</sup> <a name="workflow_status" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.workflowStatus"></a>

```python
workflow_status: str
```

- *Type:* str

---

##### `workflow_version`<sup>Required</sup> <a name="workflow_version" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.workflowVersion"></a>

```python
workflow_version: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMwaaserverlessWorkflowConfig <a name="DataAwsccMwaaserverlessWorkflowConfig" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaaserverless_workflow

dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mwaaserverless_workflow#id DataAwsccMwaaserverlessWorkflow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMwaaserverlessWorkflowDefinitionS3Location <a name="DataAwsccMwaaserverlessWorkflowDefinitionS3Location" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaaserverless_workflow

dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3Location()
```


### DataAwsccMwaaserverlessWorkflowEncryptionConfiguration <a name="DataAwsccMwaaserverlessWorkflowEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaaserverless_workflow

dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfiguration()
```


### DataAwsccMwaaserverlessWorkflowLoggingConfiguration <a name="DataAwsccMwaaserverlessWorkflowLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaaserverless_workflow

dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfiguration()
```


### DataAwsccMwaaserverlessWorkflowNetworkConfiguration <a name="DataAwsccMwaaserverlessWorkflowNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaaserverless_workflow

dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfiguration()
```


### DataAwsccMwaaserverlessWorkflowScheduleConfiguration <a name="DataAwsccMwaaserverlessWorkflowScheduleConfiguration" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaaserverless_workflow

dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference <a name="DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaaserverless_workflow

dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.objectKey">object_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3Location">DataAwsccMwaaserverlessWorkflowDefinitionS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `object_key`<sup>Required</sup> <a name="object_key" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.objectKey"></a>

```python
object_key: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMwaaserverlessWorkflowDefinitionS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowDefinitionS3Location">DataAwsccMwaaserverlessWorkflowDefinitionS3Location</a>

---


### DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference <a name="DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaaserverless_workflow

dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfiguration">DataAwsccMwaaserverlessWorkflowEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMwaaserverlessWorkflowEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowEncryptionConfiguration">DataAwsccMwaaserverlessWorkflowEncryptionConfiguration</a>

---


### DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference <a name="DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaaserverless_workflow

dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfiguration">DataAwsccMwaaserverlessWorkflowLoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMwaaserverlessWorkflowLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowLoggingConfiguration">DataAwsccMwaaserverlessWorkflowLoggingConfiguration</a>

---


### DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference <a name="DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaaserverless_workflow

dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfiguration">DataAwsccMwaaserverlessWorkflowNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMwaaserverlessWorkflowNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowNetworkConfiguration">DataAwsccMwaaserverlessWorkflowNetworkConfiguration</a>

---


### DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference <a name="DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mwaaserverless_workflow

dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfiguration">DataAwsccMwaaserverlessWorkflowScheduleConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMwaaserverlessWorkflowScheduleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaserverlessWorkflow.DataAwsccMwaaserverlessWorkflowScheduleConfiguration">DataAwsccMwaaserverlessWorkflowScheduleConfiguration</a>

---



