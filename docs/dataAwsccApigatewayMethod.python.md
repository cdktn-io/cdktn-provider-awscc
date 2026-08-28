# `dataAwsccApigatewayMethod` Submodule <a name="`dataAwsccApigatewayMethod` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayMethod <a name="DataAwsccApigatewayMethod" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigateway_method awscc_apigateway_method}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_method

dataAwsccApigatewayMethod.DataAwsccApigatewayMethod(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigateway_method#id DataAwsccApigatewayMethod#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayMethod resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_method

dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_method

dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_method

dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_method

dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccApigatewayMethod resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccApigatewayMethod to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccApigatewayMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigateway_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.apiKeyRequired">api_key_required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.authorizationScopes">authorization_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.authorizationType">authorization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.authorizerId">authorizer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference">DataAwsccApigatewayMethodIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.methodResponses">method_responses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList">DataAwsccApigatewayMethodMethodResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.operationName">operation_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.requestModels">request_models</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.requestParameters">request_parameters</a></code> | <code>cdktn.BooleanMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.requestValidatorId">request_validator_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.restApiId">rest_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `api_key_required`<sup>Required</sup> <a name="api_key_required" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.apiKeyRequired"></a>

```python
api_key_required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `authorization_scopes`<sup>Required</sup> <a name="authorization_scopes" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.authorizationScopes"></a>

```python
authorization_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

---

##### `authorizer_id`<sup>Required</sup> <a name="authorizer_id" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.integration"></a>

```python
integration: DataAwsccApigatewayMethodIntegrationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference">DataAwsccApigatewayMethodIntegrationOutputReference</a>

---

##### `method_responses`<sup>Required</sup> <a name="method_responses" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.methodResponses"></a>

```python
method_responses: DataAwsccApigatewayMethodMethodResponsesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList">DataAwsccApigatewayMethodMethodResponsesList</a>

---

##### `operation_name`<sup>Required</sup> <a name="operation_name" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.operationName"></a>

```python
operation_name: str
```

- *Type:* str

---

##### `request_models`<sup>Required</sup> <a name="request_models" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.requestModels"></a>

```python
request_models: StringMap
```

- *Type:* cdktn.StringMap

---

##### `request_parameters`<sup>Required</sup> <a name="request_parameters" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.requestParameters"></a>

```python
request_parameters: BooleanMap
```

- *Type:* cdktn.BooleanMap

---

##### `request_validator_id`<sup>Required</sup> <a name="request_validator_id" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.requestValidatorId"></a>

```python
request_validator_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethod.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayMethodConfig <a name="DataAwsccApigatewayMethodConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_method

dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/apigateway_method#id DataAwsccApigatewayMethod#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayMethodIntegration <a name="DataAwsccApigatewayMethodIntegration" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_method

dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegration()
```


### DataAwsccApigatewayMethodIntegrationIntegrationResponses <a name="DataAwsccApigatewayMethodIntegrationIntegrationResponses" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponses.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_method

dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponses()
```


### DataAwsccApigatewayMethodMethodResponses <a name="DataAwsccApigatewayMethodMethodResponses" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponses.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_method

dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponses()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayMethodIntegrationIntegrationResponsesList <a name="DataAwsccApigatewayMethodIntegrationIntegrationResponsesList" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_method

dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference <a name="DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_method

dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandling">content_handling</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParameters">response_parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplates">response_templates</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPattern">selection_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponses">DataAwsccApigatewayMethodIntegrationIntegrationResponses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_handling`<sup>Required</sup> <a name="content_handling" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandling"></a>

```python
content_handling: str
```

- *Type:* str

---

##### `response_parameters`<sup>Required</sup> <a name="response_parameters" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParameters"></a>

```python
response_parameters: StringMap
```

- *Type:* cdktn.StringMap

---

##### `response_templates`<sup>Required</sup> <a name="response_templates" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplates"></a>

```python
response_templates: StringMap
```

- *Type:* cdktn.StringMap

---

##### `selection_pattern`<sup>Required</sup> <a name="selection_pattern" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPattern"></a>

```python
selection_pattern: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayMethodIntegrationIntegrationResponses
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponses">DataAwsccApigatewayMethodIntegrationIntegrationResponses</a>

---


### DataAwsccApigatewayMethodIntegrationOutputReference <a name="DataAwsccApigatewayMethodIntegrationOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_method

dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.cacheKeyParameters">cache_key_parameters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.cacheNamespace">cache_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.contentHandling">content_handling</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.credentials">credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.integrationHttpMethod">integration_http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.integrationResponses">integration_responses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList">DataAwsccApigatewayMethodIntegrationIntegrationResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.integrationTarget">integration_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.passthroughBehavior">passthrough_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.requestParameters">request_parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.requestTemplates">request_templates</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.responseTransferMode">response_transfer_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.timeoutInMillis">timeout_in_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegration">DataAwsccApigatewayMethodIntegration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_key_parameters`<sup>Required</sup> <a name="cache_key_parameters" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.cacheKeyParameters"></a>

```python
cache_key_parameters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cache_namespace`<sup>Required</sup> <a name="cache_namespace" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.cacheNamespace"></a>

```python
cache_namespace: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `content_handling`<sup>Required</sup> <a name="content_handling" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.contentHandling"></a>

```python
content_handling: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

---

##### `integration_http_method`<sup>Required</sup> <a name="integration_http_method" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.integrationHttpMethod"></a>

```python
integration_http_method: str
```

- *Type:* str

---

##### `integration_responses`<sup>Required</sup> <a name="integration_responses" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.integrationResponses"></a>

```python
integration_responses: DataAwsccApigatewayMethodIntegrationIntegrationResponsesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationIntegrationResponsesList">DataAwsccApigatewayMethodIntegrationIntegrationResponsesList</a>

---

##### `integration_target`<sup>Required</sup> <a name="integration_target" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.integrationTarget"></a>

```python
integration_target: str
```

- *Type:* str

---

##### `passthrough_behavior`<sup>Required</sup> <a name="passthrough_behavior" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.passthroughBehavior"></a>

```python
passthrough_behavior: str
```

- *Type:* str

---

##### `request_parameters`<sup>Required</sup> <a name="request_parameters" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.requestParameters"></a>

```python
request_parameters: StringMap
```

- *Type:* cdktn.StringMap

---

##### `request_templates`<sup>Required</sup> <a name="request_templates" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.requestTemplates"></a>

```python
request_templates: StringMap
```

- *Type:* cdktn.StringMap

---

##### `response_transfer_mode`<sup>Required</sup> <a name="response_transfer_mode" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.responseTransferMode"></a>

```python
response_transfer_mode: str
```

- *Type:* str

---

##### `timeout_in_millis`<sup>Required</sup> <a name="timeout_in_millis" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.timeoutInMillis"></a>

```python
timeout_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegrationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayMethodIntegration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodIntegration">DataAwsccApigatewayMethodIntegration</a>

---


### DataAwsccApigatewayMethodMethodResponsesList <a name="DataAwsccApigatewayMethodMethodResponsesList" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_method

dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccApigatewayMethodMethodResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccApigatewayMethodMethodResponsesOutputReference <a name="DataAwsccApigatewayMethodMethodResponsesOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_method

dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.responseModels">response_models</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.responseParameters">response_parameters</a></code> | <code>cdktn.BooleanMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponses">DataAwsccApigatewayMethodMethodResponses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `response_models`<sup>Required</sup> <a name="response_models" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.responseModels"></a>

```python
response_models: StringMap
```

- *Type:* cdktn.StringMap

---

##### `response_parameters`<sup>Required</sup> <a name="response_parameters" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.responseParameters"></a>

```python
response_parameters: BooleanMap
```

- *Type:* cdktn.BooleanMap

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponsesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayMethodMethodResponses
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayMethod.DataAwsccApigatewayMethodMethodResponses">DataAwsccApigatewayMethodMethodResponses</a>

---



