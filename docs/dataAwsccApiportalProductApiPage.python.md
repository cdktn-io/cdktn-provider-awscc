# `dataAwsccApiportalProductApiPage` Submodule <a name="`dataAwsccApiportalProductApiPage` Submodule" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApiportalProductApiPage <a name="DataAwsccApiportalProductApiPage" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_product_api_page awscc_apiportal_product_api_page}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_product_api_page#id DataAwsccApiportalProductApiPage#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccApiportalProductApiPage resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccApiportalProductApiPage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccApiportalProductApiPage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccApiportalProductApiPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_product_api_page#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApiportalProductApiPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.apiId">api_id</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference">DataAwsccApiportalProductApiPageApiIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.displayContent">display_content</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference">DataAwsccApiportalProductApiPageDisplayContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.managedApiId">managed_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.productApiPageArn">product_api_page_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.productApiPageId">product_api_page_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.statusException">status_exception</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference">DataAwsccApiportalProductApiPageStatusExceptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList">DataAwsccApiportalProductApiPageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.tryItState">try_it_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.apiId"></a>

```python
api_id: DataAwsccApiportalProductApiPageApiIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference">DataAwsccApiportalProductApiPageApiIdOutputReference</a>

---

##### `display_content`<sup>Required</sup> <a name="display_content" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.displayContent"></a>

```python
display_content: DataAwsccApiportalProductApiPageDisplayContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference">DataAwsccApiportalProductApiPageDisplayContentOutputReference</a>

---

##### `managed_api_id`<sup>Required</sup> <a name="managed_api_id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.managedApiId"></a>

```python
managed_api_id: str
```

- *Type:* str

---

##### `product_api_page_arn`<sup>Required</sup> <a name="product_api_page_arn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.productApiPageArn"></a>

```python
product_api_page_arn: str
```

- *Type:* str

---

##### `product_api_page_id`<sup>Required</sup> <a name="product_api_page_id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.productApiPageId"></a>

```python
product_api_page_id: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_exception`<sup>Required</sup> <a name="status_exception" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.statusException"></a>

```python
status_exception: DataAwsccApiportalProductApiPageStatusExceptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference">DataAwsccApiportalProductApiPageStatusExceptionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.tags"></a>

```python
tags: DataAwsccApiportalProductApiPageTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList">DataAwsccApiportalProductApiPageTagsList</a>

---

##### `try_it_state`<sup>Required</sup> <a name="try_it_state" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.tryItState"></a>

```python
try_it_state: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApiportalProductApiPageApiId <a name="DataAwsccApiportalProductApiPageApiId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiId.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiId()
```


### DataAwsccApiportalProductApiPageApiIdIdentifierParts <a name="DataAwsccApiportalProductApiPageApiIdIdentifierParts" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierParts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierParts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierParts()
```


### DataAwsccApiportalProductApiPageConfig <a name="DataAwsccApiportalProductApiPageConfig" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_product_api_page#id DataAwsccApiportalProductApiPage#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApiportalProductApiPageDisplayContent <a name="DataAwsccApiportalProductApiPageDisplayContent" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContent.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContent()
```


### DataAwsccApiportalProductApiPageDisplayContentOverrides <a name="DataAwsccApiportalProductApiPageDisplayContentOverrides" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverrides.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverrides()
```


### DataAwsccApiportalProductApiPageStatusException <a name="DataAwsccApiportalProductApiPageStatusException" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusException"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusException.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusException()
```


### DataAwsccApiportalProductApiPageTags <a name="DataAwsccApiportalProductApiPageTags" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference <a name="DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierParts">DataAwsccApiportalProductApiPageApiIdIdentifierParts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalProductApiPageApiIdIdentifierParts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierParts">DataAwsccApiportalProductApiPageApiIdIdentifierParts</a>

---


### DataAwsccApiportalProductApiPageApiIdOutputReference <a name="DataAwsccApiportalProductApiPageApiIdOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.identifierParts">identifier_parts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference">DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiId">DataAwsccApiportalProductApiPageApiId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_parts`<sup>Required</sup> <a name="identifier_parts" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.identifierParts"></a>

```python
identifier_parts: DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference">DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalProductApiPageApiId
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiId">DataAwsccApiportalProductApiPageApiId</a>

---


### DataAwsccApiportalProductApiPageDisplayContentOutputReference <a name="DataAwsccApiportalProductApiPageDisplayContentOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.apiUrl">api_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.none">none</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.operationName">operation_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference">DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContent">DataAwsccApiportalProductApiPageDisplayContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_url`<sup>Required</sup> <a name="api_url" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.none"></a>

```python
none: str
```

- *Type:* str

---

##### `operation_name`<sup>Required</sup> <a name="operation_name" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.operationName"></a>

```python
operation_name: str
```

- *Type:* str

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.overrides"></a>

```python
overrides: DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference">DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalProductApiPageDisplayContent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContent">DataAwsccApiportalProductApiPageDisplayContent</a>

---


### DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference <a name="DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrl">api_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationName">operation_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverrides">DataAwsccApiportalProductApiPageDisplayContentOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_url`<sup>Required</sup> <a name="api_url" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `operation_name`<sup>Required</sup> <a name="operation_name" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationName"></a>

```python
operation_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalProductApiPageDisplayContentOverrides
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverrides">DataAwsccApiportalProductApiPageDisplayContentOverrides</a>

---


### DataAwsccApiportalProductApiPageStatusExceptionOutputReference <a name="DataAwsccApiportalProductApiPageStatusExceptionOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.exception">exception</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusException">DataAwsccApiportalProductApiPageStatusException</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exception`<sup>Required</sup> <a name="exception" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.exception"></a>

```python
exception: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalProductApiPageStatusException
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusException">DataAwsccApiportalProductApiPageStatusException</a>

---


### DataAwsccApiportalProductApiPageTagsList <a name="DataAwsccApiportalProductApiPageTagsList" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccApiportalProductApiPageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccApiportalProductApiPageTagsOutputReference <a name="DataAwsccApiportalProductApiPageTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_product_api_page

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTags">DataAwsccApiportalProductApiPageTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalProductApiPageTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTags">DataAwsccApiportalProductApiPageTags</a>

---



