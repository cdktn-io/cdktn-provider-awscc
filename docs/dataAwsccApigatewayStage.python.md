# `dataAwsccApigatewayStage` Submodule <a name="`dataAwsccApigatewayStage` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayStage <a name="DataAwsccApigatewayStage" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigateway_stage awscc_apigateway_stage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_stage

dataAwsccApigatewayStage.DataAwsccApigatewayStage(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigateway_stage#id DataAwsccApigatewayStage#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayStage resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_stage

dataAwsccApigatewayStage.DataAwsccApigatewayStage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_stage

dataAwsccApigatewayStage.DataAwsccApigatewayStage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_stage

dataAwsccApigatewayStage.DataAwsccApigatewayStage.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_stage

dataAwsccApigatewayStage.DataAwsccApigatewayStage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccApigatewayStage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccApigatewayStage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccApigatewayStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigateway_stage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.accessLogSetting">access_log_setting</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference">DataAwsccApigatewayStageAccessLogSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.cacheClusterEnabled">cache_cluster_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.cacheClusterSize">cache_cluster_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.canarySetting">canary_setting</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference">DataAwsccApigatewayStageCanarySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.clientCertificateId">client_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.documentationVersion">documentation_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.methodSettings">method_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList">DataAwsccApigatewayStageMethodSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.restApiId">rest_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.stageName">stage_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList">DataAwsccApigatewayStageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.tracingEnabled">tracing_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.variables">variables</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `access_log_setting`<sup>Required</sup> <a name="access_log_setting" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.accessLogSetting"></a>

```python
access_log_setting: DataAwsccApigatewayStageAccessLogSettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference">DataAwsccApigatewayStageAccessLogSettingOutputReference</a>

---

##### `cache_cluster_enabled`<sup>Required</sup> <a name="cache_cluster_enabled" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.cacheClusterEnabled"></a>

```python
cache_cluster_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cache_cluster_size`<sup>Required</sup> <a name="cache_cluster_size" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.cacheClusterSize"></a>

```python
cache_cluster_size: str
```

- *Type:* str

---

##### `canary_setting`<sup>Required</sup> <a name="canary_setting" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.canarySetting"></a>

```python
canary_setting: DataAwsccApigatewayStageCanarySettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference">DataAwsccApigatewayStageCanarySettingOutputReference</a>

---

##### `client_certificate_id`<sup>Required</sup> <a name="client_certificate_id" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.clientCertificateId"></a>

```python
client_certificate_id: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `documentation_version`<sup>Required</sup> <a name="documentation_version" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.documentationVersion"></a>

```python
documentation_version: str
```

- *Type:* str

---

##### `method_settings`<sup>Required</sup> <a name="method_settings" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.methodSettings"></a>

```python
method_settings: DataAwsccApigatewayStageMethodSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList">DataAwsccApigatewayStageMethodSettingsList</a>

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

---

##### `stage_name`<sup>Required</sup> <a name="stage_name" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.stageName"></a>

```python
stage_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.tags"></a>

```python
tags: DataAwsccApigatewayStageTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList">DataAwsccApigatewayStageTagsList</a>

---

##### `tracing_enabled`<sup>Required</sup> <a name="tracing_enabled" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.tracingEnabled"></a>

```python
tracing_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.variables"></a>

```python
variables: StringMap
```

- *Type:* cdktn.StringMap

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayStageAccessLogSetting <a name="DataAwsccApigatewayStageAccessLogSetting" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSetting.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_stage

dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSetting()
```


### DataAwsccApigatewayStageCanarySetting <a name="DataAwsccApigatewayStageCanarySetting" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySetting.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_stage

dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySetting()
```


### DataAwsccApigatewayStageConfig <a name="DataAwsccApigatewayStageConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_stage

dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigateway_stage#id DataAwsccApigatewayStage#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayStageMethodSettings <a name="DataAwsccApigatewayStageMethodSettings" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_stage

dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettings()
```


### DataAwsccApigatewayStageTags <a name="DataAwsccApigatewayStageTags" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_stage

dataAwsccApigatewayStage.DataAwsccApigatewayStageTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayStageAccessLogSettingOutputReference <a name="DataAwsccApigatewayStageAccessLogSettingOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_stage

dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.destinationArn">destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSetting">DataAwsccApigatewayStageAccessLogSetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSettingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayStageAccessLogSetting
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageAccessLogSetting">DataAwsccApigatewayStageAccessLogSetting</a>

---


### DataAwsccApigatewayStageCanarySettingOutputReference <a name="DataAwsccApigatewayStageCanarySettingOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_stage

dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.percentTraffic">percent_traffic</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.stageVariableOverrides">stage_variable_overrides</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.useStageCache">use_stage_cache</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySetting">DataAwsccApigatewayStageCanarySetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `percent_traffic`<sup>Required</sup> <a name="percent_traffic" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.percentTraffic"></a>

```python
percent_traffic: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stage_variable_overrides`<sup>Required</sup> <a name="stage_variable_overrides" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.stageVariableOverrides"></a>

```python
stage_variable_overrides: StringMap
```

- *Type:* cdktn.StringMap

---

##### `use_stage_cache`<sup>Required</sup> <a name="use_stage_cache" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.useStageCache"></a>

```python
use_stage_cache: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySettingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayStageCanarySetting
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageCanarySetting">DataAwsccApigatewayStageCanarySetting</a>

---


### DataAwsccApigatewayStageMethodSettingsList <a name="DataAwsccApigatewayStageMethodSettingsList" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_stage

dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccApigatewayStageMethodSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccApigatewayStageMethodSettingsOutputReference <a name="DataAwsccApigatewayStageMethodSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_stage

dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.cacheDataEncrypted">cache_data_encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.cacheTtlInSeconds">cache_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.cachingEnabled">caching_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.dataTraceEnabled">data_trace_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.loggingLevel">logging_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.metricsEnabled">metrics_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.resourcePath">resource_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.throttlingBurstLimit">throttling_burst_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.throttlingRateLimit">throttling_rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettings">DataAwsccApigatewayStageMethodSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_data_encrypted`<sup>Required</sup> <a name="cache_data_encrypted" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.cacheDataEncrypted"></a>

```python
cache_data_encrypted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cache_ttl_in_seconds`<sup>Required</sup> <a name="cache_ttl_in_seconds" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.cacheTtlInSeconds"></a>

```python
cache_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `caching_enabled`<sup>Required</sup> <a name="caching_enabled" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.cachingEnabled"></a>

```python
caching_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `data_trace_enabled`<sup>Required</sup> <a name="data_trace_enabled" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.dataTraceEnabled"></a>

```python
data_trace_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `logging_level`<sup>Required</sup> <a name="logging_level" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

---

##### `metrics_enabled`<sup>Required</sup> <a name="metrics_enabled" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.metricsEnabled"></a>

```python
metrics_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `resource_path`<sup>Required</sup> <a name="resource_path" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.resourcePath"></a>

```python
resource_path: str
```

- *Type:* str

---

##### `throttling_burst_limit`<sup>Required</sup> <a name="throttling_burst_limit" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.throttlingBurstLimit"></a>

```python
throttling_burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_rate_limit`<sup>Required</sup> <a name="throttling_rate_limit" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.throttlingRateLimit"></a>

```python
throttling_rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayStageMethodSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageMethodSettings">DataAwsccApigatewayStageMethodSettings</a>

---


### DataAwsccApigatewayStageTagsList <a name="DataAwsccApigatewayStageTagsList" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_stage

dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccApigatewayStageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccApigatewayStageTagsOutputReference <a name="DataAwsccApigatewayStageTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_stage

dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTags">DataAwsccApigatewayStageTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayStageTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayStage.DataAwsccApigatewayStageTags">DataAwsccApigatewayStageTags</a>

---



