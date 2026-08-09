# `dataAwsccServicecatalogCloudformationProduct` Submodule <a name="`dataAwsccServicecatalogCloudformationProduct` Submodule" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccServicecatalogCloudformationProduct <a name="DataAwsccServicecatalogCloudformationProduct" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/servicecatalog_cloudformation_product awscc_servicecatalog_cloudformation_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/servicecatalog_cloudformation_product#id DataAwsccServicecatalogCloudformationProduct#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccServicecatalogCloudformationProduct resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccServicecatalogCloudformationProduct resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccServicecatalogCloudformationProduct to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccServicecatalogCloudformationProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/servicecatalog_cloudformation_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccServicecatalogCloudformationProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.acceptLanguage">accept_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.cloudformationProductId">cloudformation_product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.distributor">distributor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.productName">product_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.productType">product_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.provisioningArtifactIds">provisioning_artifact_ids</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.provisioningArtifactNames">provisioning_artifact_names</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.provisioningArtifactParameters">provisioning_artifact_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList">DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.replaceProvisioningArtifacts">replace_provisioning_artifacts</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.sourceConnection">source_connection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference">DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.supportDescription">support_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.supportEmail">support_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.supportUrl">support_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList">DataAwsccServicecatalogCloudformationProductTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `accept_language`<sup>Required</sup> <a name="accept_language" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

---

##### `cloudformation_product_id`<sup>Required</sup> <a name="cloudformation_product_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.cloudformationProductId"></a>

```python
cloudformation_product_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `distributor`<sup>Required</sup> <a name="distributor" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.distributor"></a>

```python
distributor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `product_name`<sup>Required</sup> <a name="product_name" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.productName"></a>

```python
product_name: str
```

- *Type:* str

---

##### `product_type`<sup>Required</sup> <a name="product_type" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.productType"></a>

```python
product_type: str
```

- *Type:* str

---

##### `provisioning_artifact_ids`<sup>Required</sup> <a name="provisioning_artifact_ids" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.provisioningArtifactIds"></a>

```python
provisioning_artifact_ids: str
```

- *Type:* str

---

##### `provisioning_artifact_names`<sup>Required</sup> <a name="provisioning_artifact_names" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.provisioningArtifactNames"></a>

```python
provisioning_artifact_names: str
```

- *Type:* str

---

##### `provisioning_artifact_parameters`<sup>Required</sup> <a name="provisioning_artifact_parameters" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.provisioningArtifactParameters"></a>

```python
provisioning_artifact_parameters: DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList">DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList</a>

---

##### `replace_provisioning_artifacts`<sup>Required</sup> <a name="replace_provisioning_artifacts" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.replaceProvisioningArtifacts"></a>

```python
replace_provisioning_artifacts: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `source_connection`<sup>Required</sup> <a name="source_connection" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.sourceConnection"></a>

```python
source_connection: DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference">DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference</a>

---

##### `support_description`<sup>Required</sup> <a name="support_description" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.supportDescription"></a>

```python
support_description: str
```

- *Type:* str

---

##### `support_email`<sup>Required</sup> <a name="support_email" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.supportEmail"></a>

```python
support_email: str
```

- *Type:* str

---

##### `support_url`<sup>Required</sup> <a name="support_url" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.supportUrl"></a>

```python
support_url: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.tags"></a>

```python
tags: DataAwsccServicecatalogCloudformationProductTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList">DataAwsccServicecatalogCloudformationProductTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccServicecatalogCloudformationProductConfig <a name="DataAwsccServicecatalogCloudformationProductConfig" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/servicecatalog_cloudformation_product#id DataAwsccServicecatalogCloudformationProduct#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters <a name="DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters()
```


### DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo <a name="DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo()
```


### DataAwsccServicecatalogCloudformationProductSourceConnection <a name="DataAwsccServicecatalogCloudformationProductSourceConnection" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnection.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnection()
```


### DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters <a name="DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters()
```


### DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar <a name="DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar()
```


### DataAwsccServicecatalogCloudformationProductTags <a name="DataAwsccServicecatalogCloudformationProductTags" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference <a name="DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalId">import_from_physical_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrl">load_template_from_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo">DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `import_from_physical_id`<sup>Required</sup> <a name="import_from_physical_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalId"></a>

```python
import_from_physical_id: str
```

- *Type:* str

---

##### `load_template_from_url`<sup>Required</sup> <a name="load_template_from_url" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrl"></a>

```python
load_template_from_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo">DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a>

---


### DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList <a name="DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference <a name="DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidation">disable_template_validation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.info">info</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference">DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters">DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_template_validation`<sup>Required</sup> <a name="disable_template_validation" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidation"></a>

```python
disable_template_validation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `info`<sup>Required</sup> <a name="info" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.info"></a>

```python
info: DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference">DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters">DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters</a>

---


### DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference <a name="DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPath">artifact_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArn">connection_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifact_path`<sup>Required</sup> <a name="artifact_path" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPath"></a>

```python
artifact_path: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `connection_arn`<sup>Required</sup> <a name="connection_arn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArn"></a>

```python
connection_arn: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a>

---


### DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference <a name="DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStar">code_star</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference">DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters">DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_star`<sup>Required</sup> <a name="code_star" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStar"></a>

```python
code_star: DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference">DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters">DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters</a>

---


### DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference <a name="DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParameters">connection_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference">DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnection">DataAwsccServicecatalogCloudformationProductSourceConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_parameters`<sup>Required</sup> <a name="connection_parameters" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParameters"></a>

```python
connection_parameters: DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference">DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccServicecatalogCloudformationProductSourceConnection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnection">DataAwsccServicecatalogCloudformationProductSourceConnection</a>

---


### DataAwsccServicecatalogCloudformationProductTagsList <a name="DataAwsccServicecatalogCloudformationProductTagsList" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccServicecatalogCloudformationProductTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccServicecatalogCloudformationProductTagsOutputReference <a name="DataAwsccServicecatalogCloudformationProductTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_product

dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTags">DataAwsccServicecatalogCloudformationProductTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccServicecatalogCloudformationProductTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTags">DataAwsccServicecatalogCloudformationProductTags</a>

---



