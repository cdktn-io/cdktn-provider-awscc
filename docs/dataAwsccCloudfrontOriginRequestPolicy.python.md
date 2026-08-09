# `dataAwsccCloudfrontOriginRequestPolicy` Submodule <a name="`dataAwsccCloudfrontOriginRequestPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontOriginRequestPolicy <a name="DataAwsccCloudfrontOriginRequestPolicy" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_origin_request_policy awscc_cloudfront_origin_request_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_origin_request_policy

dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_origin_request_policy#id DataAwsccCloudfrontOriginRequestPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontOriginRequestPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_origin_request_policy

dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_origin_request_policy

dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_origin_request_policy

dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_origin_request_policy

dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCloudfrontOriginRequestPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCloudfrontOriginRequestPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCloudfrontOriginRequestPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_origin_request_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontOriginRequestPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.originRequestPolicyConfig">origin_request_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.originRequestPolicyId">origin_request_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `origin_request_policy_config`<sup>Required</sup> <a name="origin_request_policy_config" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.originRequestPolicyConfig"></a>

```python
origin_request_policy_config: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference</a>

---

##### `origin_request_policy_id`<sup>Required</sup> <a name="origin_request_policy_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.originRequestPolicyId"></a>

```python
origin_request_policy_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontOriginRequestPolicyConfig <a name="DataAwsccCloudfrontOriginRequestPolicyConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_origin_request_policy

dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_origin_request_policy#id DataAwsccCloudfrontOriginRequestPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_origin_request_policy

dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig()
```


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_origin_request_policy

dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig()
```


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_origin_request_policy

dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig()
```


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_origin_request_policy

dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_origin_request_policy

dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookieBehavior">cookie_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookies">cookies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookie_behavior`<sup>Required</sup> <a name="cookie_behavior" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookieBehavior"></a>

```python
cookie_behavior: str
```

- *Type:* str

---

##### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookies"></a>

```python
cookies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig</a>

---


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_origin_request_policy

dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headerBehavior">header_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headers">headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_behavior`<sup>Required</sup> <a name="header_behavior" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headerBehavior"></a>

```python
header_behavior: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headers"></a>

```python
headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig</a>

---


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_origin_request_policy

dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.cookiesConfig">cookies_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.headersConfig">headers_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.queryStringsConfig">query_strings_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `cookies_config`<sup>Required</sup> <a name="cookies_config" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.cookiesConfig"></a>

```python
cookies_config: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference</a>

---

##### `headers_config`<sup>Required</sup> <a name="headers_config" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.headersConfig"></a>

```python
headers_config: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query_strings_config`<sup>Required</sup> <a name="query_strings_config" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.queryStringsConfig"></a>

```python
query_strings_config: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig</a>

---


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_origin_request_policy

dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStringBehavior">query_string_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStrings">query_strings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_string_behavior`<sup>Required</sup> <a name="query_string_behavior" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStringBehavior"></a>

```python
query_string_behavior: str
```

- *Type:* str

---

##### `query_strings`<sup>Required</sup> <a name="query_strings" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStrings"></a>

```python
query_strings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig</a>

---



