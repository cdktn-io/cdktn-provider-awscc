# `dataAwsccCloudfrontResponseHeadersPolicy` Submodule <a name="`dataAwsccCloudfrontResponseHeadersPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontResponseHeadersPolicy <a name="DataAwsccCloudfrontResponseHeadersPolicy" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_response_headers_policy awscc_cloudfront_response_headers_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_response_headers_policy#id DataAwsccCloudfrontResponseHeadersPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontResponseHeadersPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCloudfrontResponseHeadersPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCloudfrontResponseHeadersPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCloudfrontResponseHeadersPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_response_headers_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontResponseHeadersPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.responseHeadersPolicyConfig">response_headers_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.responseHeadersPolicyId">response_headers_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `response_headers_policy_config`<sup>Required</sup> <a name="response_headers_policy_config" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.responseHeadersPolicyConfig"></a>

```python
response_headers_policy_config: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference</a>

---

##### `response_headers_policy_id`<sup>Required</sup> <a name="response_headers_policy_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.responseHeadersPolicyId"></a>

```python
response_headers_policy_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontResponseHeadersPolicyConfig <a name="DataAwsccCloudfrontResponseHeadersPolicyConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_response_headers_policy#id DataAwsccCloudfrontResponseHeadersPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig()
```


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig()
```


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders()
```


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods()
```


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins()
```


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders()
```


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig()
```


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems()
```


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig()
```


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems()
```


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig()
```


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy()
```


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions()
```


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions()
```


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy()
```


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity()
```


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection()
```


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders</a>

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods</a>

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins</a>

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders</a>

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowCredentials">access_control_allow_credentials</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowHeaders">access_control_allow_headers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowMethods">access_control_allow_methods</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowOrigins">access_control_allow_origins</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlExposeHeaders">access_control_expose_headers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlMaxAgeSec">access_control_max_age_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.originOverride">origin_override</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_control_allow_credentials`<sup>Required</sup> <a name="access_control_allow_credentials" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowCredentials"></a>

```python
access_control_allow_credentials: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `access_control_allow_headers`<sup>Required</sup> <a name="access_control_allow_headers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowHeaders"></a>

```python
access_control_allow_headers: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference</a>

---

##### `access_control_allow_methods`<sup>Required</sup> <a name="access_control_allow_methods" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowMethods"></a>

```python
access_control_allow_methods: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference</a>

---

##### `access_control_allow_origins`<sup>Required</sup> <a name="access_control_allow_origins" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowOrigins"></a>

```python
access_control_allow_origins: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference</a>

---

##### `access_control_expose_headers`<sup>Required</sup> <a name="access_control_expose_headers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlExposeHeaders"></a>

```python
access_control_expose_headers: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference</a>

---

##### `access_control_max_age_sec`<sup>Required</sup> <a name="access_control_max_age_sec" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlMaxAgeSec"></a>

```python
access_control_max_age_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `origin_override`<sup>Required</sup> <a name="origin_override" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.originOverride"></a>

```python
origin_override: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig</a>

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.header">header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.override">override</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.header"></a>

```python
header: str
```

- *Type:* str

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.override"></a>

```python
override: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems</a>

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.property.items">items</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.property.items"></a>

```python
items: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig</a>

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.corsConfig">cors_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.customHeadersConfig">custom_headers_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.removeHeadersConfig">remove_headers_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.securityHeadersConfig">security_headers_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.serverTimingHeadersConfig">server_timing_headers_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `cors_config`<sup>Required</sup> <a name="cors_config" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.corsConfig"></a>

```python
cors_config: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference</a>

---

##### `custom_headers_config`<sup>Required</sup> <a name="custom_headers_config" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.customHeadersConfig"></a>

```python
custom_headers_config: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remove_headers_config`<sup>Required</sup> <a name="remove_headers_config" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.removeHeadersConfig"></a>

```python
remove_headers_config: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference</a>

---

##### `security_headers_config`<sup>Required</sup> <a name="security_headers_config" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.securityHeadersConfig"></a>

```python
security_headers_config: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference</a>

---

##### `server_timing_headers_config`<sup>Required</sup> <a name="server_timing_headers_config" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.serverTimingHeadersConfig"></a>

```python
server_timing_headers_config: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig</a>

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.property.header">header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.property.header"></a>

```python
header: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems</a>

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.property.items">items</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.property.items"></a>

```python
items: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig</a>

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.contentSecurityPolicy">content_security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.override">override</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_security_policy`<sup>Required</sup> <a name="content_security_policy" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.contentSecurityPolicy"></a>

```python
content_security_policy: str
```

- *Type:* str

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.override"></a>

```python
override: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy</a>

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.property.override">override</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.property.override"></a>

```python
override: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions</a>

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.frameOption">frame_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.override">override</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frame_option`<sup>Required</sup> <a name="frame_option" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.frameOption"></a>

```python
frame_option: str
```

- *Type:* str

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.override"></a>

```python
override: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions</a>

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.contentSecurityPolicy">content_security_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.contentTypeOptions">content_type_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.frameOptions">frame_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.referrerPolicy">referrer_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.strictTransportSecurity">strict_transport_security</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.xssProtection">xss_protection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_security_policy`<sup>Required</sup> <a name="content_security_policy" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.contentSecurityPolicy"></a>

```python
content_security_policy: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference</a>

---

##### `content_type_options`<sup>Required</sup> <a name="content_type_options" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.contentTypeOptions"></a>

```python
content_type_options: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference</a>

---

##### `frame_options`<sup>Required</sup> <a name="frame_options" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.frameOptions"></a>

```python
frame_options: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference</a>

---

##### `referrer_policy`<sup>Required</sup> <a name="referrer_policy" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.referrerPolicy"></a>

```python
referrer_policy: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference</a>

---

##### `strict_transport_security`<sup>Required</sup> <a name="strict_transport_security" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.strictTransportSecurity"></a>

```python
strict_transport_security: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference</a>

---

##### `xss_protection`<sup>Required</sup> <a name="xss_protection" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.xssProtection"></a>

```python
xss_protection: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig</a>

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.override">override</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.referrerPolicy">referrer_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.override"></a>

```python
override: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `referrer_policy`<sup>Required</sup> <a name="referrer_policy" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.referrerPolicy"></a>

```python
referrer_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy</a>

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.accessControlMaxAgeSec">access_control_max_age_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.includeSubdomains">include_subdomains</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.override">override</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.preload">preload</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_control_max_age_sec`<sup>Required</sup> <a name="access_control_max_age_sec" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.accessControlMaxAgeSec"></a>

```python
access_control_max_age_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `include_subdomains`<sup>Required</sup> <a name="include_subdomains" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.includeSubdomains"></a>

```python
include_subdomains: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.override"></a>

```python
override: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `preload`<sup>Required</sup> <a name="preload" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.preload"></a>

```python
preload: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity</a>

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.modeBlock">mode_block</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.override">override</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.protection">protection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.reportUri">report_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_block`<sup>Required</sup> <a name="mode_block" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.modeBlock"></a>

```python
mode_block: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.override"></a>

```python
override: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `protection`<sup>Required</sup> <a name="protection" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.protection"></a>

```python
protection: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `report_uri`<sup>Required</sup> <a name="report_uri" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.reportUri"></a>

```python
report_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection</a>

---


### DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference <a name="DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_response_headers_policy

dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.samplingRate">sampling_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `sampling_rate`<sup>Required</sup> <a name="sampling_rate" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.samplingRate"></a>

```python
sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontResponseHeadersPolicy.DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig">DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig</a>

---



