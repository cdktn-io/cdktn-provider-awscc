# `dataAwsccCloudfrontCloudfrontOriginAccessIdentity` Submodule <a name="`dataAwsccCloudfrontCloudfrontOriginAccessIdentity` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontCloudfrontOriginAccessIdentity <a name="DataAwsccCloudfrontCloudfrontOriginAccessIdentity" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudfront_cloudfront_origin_access_identity awscc_cloudfront_cloudfront_origin_access_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_cloudfront_origin_access_identity

dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudfront_cloudfront_origin_access_identity#id DataAwsccCloudfrontCloudfrontOriginAccessIdentity#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontCloudfrontOriginAccessIdentity resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_cloudfront_origin_access_identity

dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_cloudfront_origin_access_identity

dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_cloudfront_origin_access_identity

dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_cloudfront_origin_access_identity

dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCloudfrontCloudfrontOriginAccessIdentity resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCloudfrontCloudfrontOriginAccessIdentity to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCloudfrontCloudfrontOriginAccessIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudfront_cloudfront_origin_access_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontCloudfrontOriginAccessIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityConfig">cloudfront_origin_access_identity_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference">DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityId">cloudfront_origin_access_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.s3CanonicalUserId">s3_canonical_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `cloudfront_origin_access_identity_config`<sup>Required</sup> <a name="cloudfront_origin_access_identity_config" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityConfig"></a>

```python
cloudfront_origin_access_identity_config: DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference">DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference</a>

---

##### `cloudfront_origin_access_identity_id`<sup>Required</sup> <a name="cloudfront_origin_access_identity_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityId"></a>

```python
cloudfront_origin_access_identity_id: str
```

- *Type:* str

---

##### `s3_canonical_user_id`<sup>Required</sup> <a name="s3_canonical_user_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.s3CanonicalUserId"></a>

```python
s3_canonical_user_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentity.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig <a name="DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_cloudfront_origin_access_identity

dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig()
```


### DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig <a name="DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_cloudfront_origin_access_identity

dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudfront_cloudfront_origin_access_identity#id DataAwsccCloudfrontCloudfrontOriginAccessIdentity#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference <a name="DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_cloudfront_origin_access_identity

dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontCloudfrontOriginAccessIdentity.DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a>

---



