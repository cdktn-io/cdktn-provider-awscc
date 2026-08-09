# `dataAwsccApigatewayRestApi` Submodule <a name="`dataAwsccApigatewayRestApi` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayRestApi <a name="DataAwsccApigatewayRestApi" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_rest_api awscc_apigateway_rest_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_rest_api

dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_rest_api#id DataAwsccApigatewayRestApi#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayRestApi resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_rest_api

dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_rest_api

dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_rest_api

dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_rest_api

dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccApigatewayRestApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccApigatewayRestApi to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccApigatewayRestApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_rest_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayRestApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.apiKeySourceType">api_key_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.binaryMediaTypes">binary_media_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.bodyS3Location">body_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference">DataAwsccApigatewayRestApiBodyS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.cloneFrom">clone_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.disableExecuteApiEndpoint">disable_execute_api_endpoint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.endpointAccessMode">endpoint_access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.endpointConfiguration">endpoint_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference">DataAwsccApigatewayRestApiEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.failOnWarnings">fail_on_warnings</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.minimumCompressionSize">minimum_compression_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.restApiId">rest_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.rootResourceId">root_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.securityPolicy">security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList">DataAwsccApigatewayRestApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `api_key_source_type`<sup>Required</sup> <a name="api_key_source_type" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.apiKeySourceType"></a>

```python
api_key_source_type: str
```

- *Type:* str

---

##### `binary_media_types`<sup>Required</sup> <a name="binary_media_types" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.binaryMediaTypes"></a>

```python
binary_media_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `body_s3_location`<sup>Required</sup> <a name="body_s3_location" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.bodyS3Location"></a>

```python
body_s3_location: DataAwsccApigatewayRestApiBodyS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference">DataAwsccApigatewayRestApiBodyS3LocationOutputReference</a>

---

##### `clone_from`<sup>Required</sup> <a name="clone_from" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.cloneFrom"></a>

```python
clone_from: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_execute_api_endpoint`<sup>Required</sup> <a name="disable_execute_api_endpoint" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.disableExecuteApiEndpoint"></a>

```python
disable_execute_api_endpoint: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `endpoint_access_mode`<sup>Required</sup> <a name="endpoint_access_mode" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.endpointAccessMode"></a>

```python
endpoint_access_mode: str
```

- *Type:* str

---

##### `endpoint_configuration`<sup>Required</sup> <a name="endpoint_configuration" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.endpointConfiguration"></a>

```python
endpoint_configuration: DataAwsccApigatewayRestApiEndpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference">DataAwsccApigatewayRestApiEndpointConfigurationOutputReference</a>

---

##### `fail_on_warnings`<sup>Required</sup> <a name="fail_on_warnings" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.failOnWarnings"></a>

```python
fail_on_warnings: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `minimum_compression_size`<sup>Required</sup> <a name="minimum_compression_size" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.minimumCompressionSize"></a>

```python
minimum_compression_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

---

##### `root_resource_id`<sup>Required</sup> <a name="root_resource_id" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.rootResourceId"></a>

```python
root_resource_id: str
```

- *Type:* str

---

##### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.tags"></a>

```python
tags: DataAwsccApigatewayRestApiTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList">DataAwsccApigatewayRestApiTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayRestApiBodyS3Location <a name="DataAwsccApigatewayRestApiBodyS3Location" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_rest_api

dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3Location()
```


### DataAwsccApigatewayRestApiConfig <a name="DataAwsccApigatewayRestApiConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_rest_api

dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_rest_api#id DataAwsccApigatewayRestApi#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayRestApiEndpointConfiguration <a name="DataAwsccApigatewayRestApiEndpointConfiguration" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_rest_api

dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfiguration()
```


### DataAwsccApigatewayRestApiTags <a name="DataAwsccApigatewayRestApiTags" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_rest_api

dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayRestApiBodyS3LocationOutputReference <a name="DataAwsccApigatewayRestApiBodyS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_rest_api

dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.eTag">e_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3Location">DataAwsccApigatewayRestApiBodyS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `e_tag`<sup>Required</sup> <a name="e_tag" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.eTag"></a>

```python
e_tag: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayRestApiBodyS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3Location">DataAwsccApigatewayRestApiBodyS3Location</a>

---


### DataAwsccApigatewayRestApiEndpointConfigurationOutputReference <a name="DataAwsccApigatewayRestApiEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_rest_api

dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.types">types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds">vpc_endpoint_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfiguration">DataAwsccApigatewayRestApiEndpointConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.types"></a>

```python
types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_endpoint_ids`<sup>Required</sup> <a name="vpc_endpoint_ids" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds"></a>

```python
vpc_endpoint_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayRestApiEndpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfiguration">DataAwsccApigatewayRestApiEndpointConfiguration</a>

---


### DataAwsccApigatewayRestApiTagsList <a name="DataAwsccApigatewayRestApiTagsList" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_rest_api

dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccApigatewayRestApiTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccApigatewayRestApiTagsOutputReference <a name="DataAwsccApigatewayRestApiTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_rest_api

dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTags">DataAwsccApigatewayRestApiTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApigatewayRestApiTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTags">DataAwsccApigatewayRestApiTags</a>

---



