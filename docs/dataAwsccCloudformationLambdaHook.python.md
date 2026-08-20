# `dataAwsccCloudformationLambdaHook` Submodule <a name="`dataAwsccCloudformationLambdaHook` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudformationLambdaHook <a name="DataAwsccCloudformationLambdaHook" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cloudformation_lambda_hook awscc_cloudformation_lambda_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cloudformation_lambda_hook#id DataAwsccCloudformationLambdaHook#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCloudformationLambdaHook resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCloudformationLambdaHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCloudformationLambdaHook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCloudformationLambdaHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cloudformation_lambda_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudformationLambdaHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.autoUpdate">auto_update</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.failureMode">failure_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.hookArn">hook_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.hookStatus">hook_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.lambdaFunction">lambda_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference">DataAwsccCloudformationLambdaHookLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.stackFilters">stack_filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference">DataAwsccCloudformationLambdaHookStackFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.targetFilters">target_filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference">DataAwsccCloudformationLambdaHookTargetFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.targetOperations">target_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `auto_update`<sup>Required</sup> <a name="auto_update" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.autoUpdate"></a>

```python
auto_update: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `failure_mode`<sup>Required</sup> <a name="failure_mode" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.failureMode"></a>

```python
failure_mode: str
```

- *Type:* str

---

##### `hook_arn`<sup>Required</sup> <a name="hook_arn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.hookArn"></a>

```python
hook_arn: str
```

- *Type:* str

---

##### `hook_status`<sup>Required</sup> <a name="hook_status" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.hookStatus"></a>

```python
hook_status: str
```

- *Type:* str

---

##### `lambda_function`<sup>Required</sup> <a name="lambda_function" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.lambdaFunction"></a>

```python
lambda_function: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.loggingConfig"></a>

```python
logging_config: DataAwsccCloudformationLambdaHookLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference">DataAwsccCloudformationLambdaHookLoggingConfigOutputReference</a>

---

##### `stack_filters`<sup>Required</sup> <a name="stack_filters" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.stackFilters"></a>

```python
stack_filters: DataAwsccCloudformationLambdaHookStackFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference">DataAwsccCloudformationLambdaHookStackFiltersOutputReference</a>

---

##### `target_filters`<sup>Required</sup> <a name="target_filters" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.targetFilters"></a>

```python
target_filters: DataAwsccCloudformationLambdaHookTargetFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference">DataAwsccCloudformationLambdaHookTargetFiltersOutputReference</a>

---

##### `target_operations`<sup>Required</sup> <a name="target_operations" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.targetOperations"></a>

```python
target_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudformationLambdaHookConfig <a name="DataAwsccCloudformationLambdaHookConfig" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cloudformation_lambda_hook#id DataAwsccCloudformationLambdaHook#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudformationLambdaHookLoggingConfig <a name="DataAwsccCloudformationLambdaHookLoggingConfig" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfig()
```


### DataAwsccCloudformationLambdaHookStackFilters <a name="DataAwsccCloudformationLambdaHookStackFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFilters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFilters()
```


### DataAwsccCloudformationLambdaHookStackFiltersStackNames <a name="DataAwsccCloudformationLambdaHookStackFiltersStackNames" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNames.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNames()
```


### DataAwsccCloudformationLambdaHookStackFiltersStackRoles <a name="DataAwsccCloudformationLambdaHookStackFiltersStackRoles" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRoles.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRoles()
```


### DataAwsccCloudformationLambdaHookTargetFilters <a name="DataAwsccCloudformationLambdaHookTargetFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFilters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFilters()
```


### DataAwsccCloudformationLambdaHookTargetFiltersTargets <a name="DataAwsccCloudformationLambdaHookTargetFiltersTargets" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargets()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudformationLambdaHookLoggingConfigOutputReference <a name="DataAwsccCloudformationLambdaHookLoggingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.logRoleArn">log_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfig">DataAwsccCloudformationLambdaHookLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `log_role_arn`<sup>Required</sup> <a name="log_role_arn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.logRoleArn"></a>

```python
log_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationLambdaHookLoggingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfig">DataAwsccCloudformationLambdaHookLoggingConfig</a>

---


### DataAwsccCloudformationLambdaHookStackFiltersOutputReference <a name="DataAwsccCloudformationLambdaHookStackFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.filteringCriteria">filtering_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.stackNames">stack_names</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference">DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.stackRoles">stack_roles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference">DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFilters">DataAwsccCloudformationLambdaHookStackFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filtering_criteria`<sup>Required</sup> <a name="filtering_criteria" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.filteringCriteria"></a>

```python
filtering_criteria: str
```

- *Type:* str

---

##### `stack_names`<sup>Required</sup> <a name="stack_names" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.stackNames"></a>

```python
stack_names: DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference">DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference</a>

---

##### `stack_roles`<sup>Required</sup> <a name="stack_roles" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.stackRoles"></a>

```python
stack_roles: DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference">DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationLambdaHookStackFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFilters">DataAwsccCloudformationLambdaHookStackFilters</a>

---


### DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference <a name="DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNames">DataAwsccCloudformationLambdaHookStackFiltersStackNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationLambdaHookStackFiltersStackNames
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNames">DataAwsccCloudformationLambdaHookStackFiltersStackNames</a>

---


### DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference <a name="DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRoles">DataAwsccCloudformationLambdaHookStackFiltersStackRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationLambdaHookStackFiltersStackRoles
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRoles">DataAwsccCloudformationLambdaHookStackFiltersStackRoles</a>

---


### DataAwsccCloudformationLambdaHookTargetFiltersOutputReference <a name="DataAwsccCloudformationLambdaHookTargetFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.invocationPoints">invocation_points</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.targetNames">target_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList">DataAwsccCloudformationLambdaHookTargetFiltersTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFilters">DataAwsccCloudformationLambdaHookTargetFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `invocation_points`<sup>Required</sup> <a name="invocation_points" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.invocationPoints"></a>

```python
invocation_points: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_names`<sup>Required</sup> <a name="target_names" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.targetNames"></a>

```python
target_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.targets"></a>

```python
targets: DataAwsccCloudformationLambdaHookTargetFiltersTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList">DataAwsccCloudformationLambdaHookTargetFiltersTargetsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationLambdaHookTargetFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFilters">DataAwsccCloudformationLambdaHookTargetFilters</a>

---


### DataAwsccCloudformationLambdaHookTargetFiltersTargetsList <a name="DataAwsccCloudformationLambdaHookTargetFiltersTargetsList" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference <a name="DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_lambda_hook

dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.invocationPoint">invocation_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.targetName">target_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargets">DataAwsccCloudformationLambdaHookTargetFiltersTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `invocation_point`<sup>Required</sup> <a name="invocation_point" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.invocationPoint"></a>

```python
invocation_point: str
```

- *Type:* str

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationLambdaHookTargetFiltersTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargets">DataAwsccCloudformationLambdaHookTargetFiltersTargets</a>

---



