# `dataAwsccServicecatalogCloudformationProvisionedProduct` Submodule <a name="`dataAwsccServicecatalogCloudformationProvisionedProduct` Submodule" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccServicecatalogCloudformationProvisionedProduct <a name="DataAwsccServicecatalogCloudformationProvisionedProduct" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicecatalog_cloudformation_provisioned_product awscc_servicecatalog_cloudformation_provisioned_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_provisioned_product

dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicecatalog_cloudformation_provisioned_product#id DataAwsccServicecatalogCloudformationProvisionedProduct#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccServicecatalogCloudformationProvisionedProduct resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_provisioned_product

dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_provisioned_product

dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_provisioned_product

dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_provisioned_product

dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccServicecatalogCloudformationProvisionedProduct resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccServicecatalogCloudformationProvisionedProduct to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccServicecatalogCloudformationProvisionedProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicecatalog_cloudformation_provisioned_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccServicecatalogCloudformationProvisionedProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.acceptLanguage">accept_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.cloudformationStackArn">cloudformation_stack_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.notificationArns">notification_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.outputs">outputs</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.pathId">path_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.pathName">path_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.productName">product_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisionedProductId">provisioned_product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisionedProductName">provisioned_product_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactId">provisioning_artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactName">provisioning_artifact_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisioningParameters">provisioning_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList">DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisioningPreferences">provisioning_preferences</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference">DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.recordId">record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList">DataAwsccServicecatalogCloudformationProvisionedProductTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `accept_language`<sup>Required</sup> <a name="accept_language" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

---

##### `cloudformation_stack_arn`<sup>Required</sup> <a name="cloudformation_stack_arn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.cloudformationStackArn"></a>

```python
cloudformation_stack_arn: str
```

- *Type:* str

---

##### `notification_arns`<sup>Required</sup> <a name="notification_arns" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.notificationArns"></a>

```python
notification_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.outputs"></a>

```python
outputs: StringMap
```

- *Type:* cdktn.StringMap

---

##### `path_id`<sup>Required</sup> <a name="path_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.pathId"></a>

```python
path_id: str
```

- *Type:* str

---

##### `path_name`<sup>Required</sup> <a name="path_name" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.pathName"></a>

```python
path_name: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `product_name`<sup>Required</sup> <a name="product_name" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.productName"></a>

```python
product_name: str
```

- *Type:* str

---

##### `provisioned_product_id`<sup>Required</sup> <a name="provisioned_product_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisionedProductId"></a>

```python
provisioned_product_id: str
```

- *Type:* str

---

##### `provisioned_product_name`<sup>Required</sup> <a name="provisioned_product_name" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisionedProductName"></a>

```python
provisioned_product_name: str
```

- *Type:* str

---

##### `provisioning_artifact_id`<sup>Required</sup> <a name="provisioning_artifact_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactId"></a>

```python
provisioning_artifact_id: str
```

- *Type:* str

---

##### `provisioning_artifact_name`<sup>Required</sup> <a name="provisioning_artifact_name" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactName"></a>

```python
provisioning_artifact_name: str
```

- *Type:* str

---

##### `provisioning_parameters`<sup>Required</sup> <a name="provisioning_parameters" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisioningParameters"></a>

```python
provisioning_parameters: DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList">DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList</a>

---

##### `provisioning_preferences`<sup>Required</sup> <a name="provisioning_preferences" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisioningPreferences"></a>

```python
provisioning_preferences: DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference">DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference</a>

---

##### `record_id`<sup>Required</sup> <a name="record_id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.recordId"></a>

```python
record_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.tags"></a>

```python
tags: DataAwsccServicecatalogCloudformationProvisionedProductTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList">DataAwsccServicecatalogCloudformationProvisionedProductTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccServicecatalogCloudformationProvisionedProductConfig <a name="DataAwsccServicecatalogCloudformationProvisionedProductConfig" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_provisioned_product

dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicecatalog_cloudformation_provisioned_product#id DataAwsccServicecatalogCloudformationProvisionedProduct#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters <a name="DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_provisioned_product

dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters()
```


### DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences <a name="DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_provisioned_product

dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences()
```


### DataAwsccServicecatalogCloudformationProvisionedProductTags <a name="DataAwsccServicecatalogCloudformationProvisionedProductTags" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_provisioned_product

dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList <a name="DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_provisioned_product

dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference <a name="DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_provisioned_product

dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters">DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters">DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters</a>

---


### DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference <a name="DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_provisioned_product

dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccounts">stack_set_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCount">stack_set_failure_tolerance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentage">stack_set_failure_tolerance_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCount">stack_set_max_concurrency_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentage">stack_set_max_concurrency_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationType">stack_set_operation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegions">stack_set_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences">DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stack_set_accounts`<sup>Required</sup> <a name="stack_set_accounts" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccounts"></a>

```python
stack_set_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stack_set_failure_tolerance_count`<sup>Required</sup> <a name="stack_set_failure_tolerance_count" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCount"></a>

```python
stack_set_failure_tolerance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_set_failure_tolerance_percentage`<sup>Required</sup> <a name="stack_set_failure_tolerance_percentage" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentage"></a>

```python
stack_set_failure_tolerance_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_set_max_concurrency_count`<sup>Required</sup> <a name="stack_set_max_concurrency_count" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCount"></a>

```python
stack_set_max_concurrency_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_set_max_concurrency_percentage`<sup>Required</sup> <a name="stack_set_max_concurrency_percentage" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentage"></a>

```python
stack_set_max_concurrency_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_set_operation_type`<sup>Required</sup> <a name="stack_set_operation_type" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationType"></a>

```python
stack_set_operation_type: str
```

- *Type:* str

---

##### `stack_set_regions`<sup>Required</sup> <a name="stack_set_regions" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegions"></a>

```python
stack_set_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences">DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

---


### DataAwsccServicecatalogCloudformationProvisionedProductTagsList <a name="DataAwsccServicecatalogCloudformationProvisionedProductTagsList" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_provisioned_product

dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference <a name="DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_servicecatalog_cloudformation_provisioned_product

dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTags">DataAwsccServicecatalogCloudformationProvisionedProductTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccServicecatalogCloudformationProvisionedProductTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTags">DataAwsccServicecatalogCloudformationProvisionedProductTags</a>

---



