# `dataAwsccCloudfrontTrustStore` Submodule <a name="`dataAwsccCloudfrontTrustStore` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontTrustStore <a name="DataAwsccCloudfrontTrustStore" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudfront_trust_store awscc_cloudfront_trust_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_trust_store

dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudfront_trust_store#id DataAwsccCloudfrontTrustStore#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontTrustStore resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_trust_store

dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_trust_store

dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_trust_store

dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_trust_store

dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCloudfrontTrustStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCloudfrontTrustStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCloudfrontTrustStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudfront_trust_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontTrustStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.caCertificatesBundleSource">ca_certificates_bundle_source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference">DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.eTag">e_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.numberOfCaCertificates">number_of_ca_certificates</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList">DataAwsccCloudfrontTrustStoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.trustStoreId">trust_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.useClientCertificateOcspEndpoint">use_client_certificate_ocsp_endpoint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `ca_certificates_bundle_source`<sup>Required</sup> <a name="ca_certificates_bundle_source" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.caCertificatesBundleSource"></a>

```python
ca_certificates_bundle_source: DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference">DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference</a>

---

##### `e_tag`<sup>Required</sup> <a name="e_tag" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.eTag"></a>

```python
e_tag: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `number_of_ca_certificates`<sup>Required</sup> <a name="number_of_ca_certificates" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.numberOfCaCertificates"></a>

```python
number_of_ca_certificates: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.tags"></a>

```python
tags: DataAwsccCloudfrontTrustStoreTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList">DataAwsccCloudfrontTrustStoreTagsList</a>

---

##### `trust_store_id`<sup>Required</sup> <a name="trust_store_id" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.trustStoreId"></a>

```python
trust_store_id: str
```

- *Type:* str

---

##### `use_client_certificate_ocsp_endpoint`<sup>Required</sup> <a name="use_client_certificate_ocsp_endpoint" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.useClientCertificateOcspEndpoint"></a>

```python
use_client_certificate_ocsp_endpoint: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontTrustStoreCaCertificatesBundleSource <a name="DataAwsccCloudfrontTrustStoreCaCertificatesBundleSource" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_trust_store

dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSource()
```


### DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location <a name="DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_trust_store

dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location()
```


### DataAwsccCloudfrontTrustStoreConfig <a name="DataAwsccCloudfrontTrustStoreConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_trust_store

dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudfront_trust_store#id DataAwsccCloudfrontTrustStore#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontTrustStoreTags <a name="DataAwsccCloudfrontTrustStoreTags" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_trust_store

dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference <a name="DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_trust_store

dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location">DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location">DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location</a>

---


### DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference <a name="DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_trust_store

dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.caCertificatesBundleS3Location">ca_certificates_bundle_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference">DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSource">DataAwsccCloudfrontTrustStoreCaCertificatesBundleSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certificates_bundle_s3_location`<sup>Required</sup> <a name="ca_certificates_bundle_s3_location" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.caCertificatesBundleS3Location"></a>

```python
ca_certificates_bundle_s3_location: DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference">DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontTrustStoreCaCertificatesBundleSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreCaCertificatesBundleSource">DataAwsccCloudfrontTrustStoreCaCertificatesBundleSource</a>

---


### DataAwsccCloudfrontTrustStoreTagsList <a name="DataAwsccCloudfrontTrustStoreTagsList" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_trust_store

dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloudfrontTrustStoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloudfrontTrustStoreTagsOutputReference <a name="DataAwsccCloudfrontTrustStoreTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudfront_trust_store

dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTags">DataAwsccCloudfrontTrustStoreTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudfrontTrustStoreTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontTrustStore.DataAwsccCloudfrontTrustStoreTags">DataAwsccCloudfrontTrustStoreTags</a>

---



