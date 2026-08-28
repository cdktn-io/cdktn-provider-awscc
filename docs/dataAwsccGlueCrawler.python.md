# `dataAwsccGlueCrawler` Submodule <a name="`dataAwsccGlueCrawler` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueCrawler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueCrawler <a name="DataAwsccGlueCrawler" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_crawler awscc_glue_crawler}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawler(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_crawler#id DataAwsccGlueCrawler#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGlueCrawler resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawler.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawler.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawler.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawler.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGlueCrawler resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGlueCrawler to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGlueCrawler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_crawler#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueCrawler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.classifiers">classifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.configuration">configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.crawlerSecurityConfiguration">crawler_security_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.lakeFormationConfiguration">lake_formation_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference">DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.recrawlPolicy">recrawl_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference">DataAwsccGlueCrawlerRecrawlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference">DataAwsccGlueCrawlerScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.schemaChangePolicy">schema_change_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference">DataAwsccGlueCrawlerSchemaChangePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.tablePrefix">table_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.tags">tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference">DataAwsccGlueCrawlerTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `classifiers`<sup>Required</sup> <a name="classifiers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.classifiers"></a>

```python
classifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

---

##### `crawler_security_configuration`<sup>Required</sup> <a name="crawler_security_configuration" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.crawlerSecurityConfiguration"></a>

```python
crawler_security_configuration: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `lake_formation_configuration`<sup>Required</sup> <a name="lake_formation_configuration" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.lakeFormationConfiguration"></a>

```python
lake_formation_configuration: DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference">DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recrawl_policy`<sup>Required</sup> <a name="recrawl_policy" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.recrawlPolicy"></a>

```python
recrawl_policy: DataAwsccGlueCrawlerRecrawlPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference">DataAwsccGlueCrawlerRecrawlPolicyOutputReference</a>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.schedule"></a>

```python
schedule: DataAwsccGlueCrawlerScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference">DataAwsccGlueCrawlerScheduleOutputReference</a>

---

##### `schema_change_policy`<sup>Required</sup> <a name="schema_change_policy" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.schemaChangePolicy"></a>

```python
schema_change_policy: DataAwsccGlueCrawlerSchemaChangePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference">DataAwsccGlueCrawlerSchemaChangePolicyOutputReference</a>

---

##### `table_prefix`<sup>Required</sup> <a name="table_prefix" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.tablePrefix"></a>

```python
table_prefix: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.tags"></a>

```python
tags: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.targets"></a>

```python
targets: DataAwsccGlueCrawlerTargetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference">DataAwsccGlueCrawlerTargetsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawler.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueCrawlerConfig <a name="DataAwsccGlueCrawlerConfig" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_crawler#id DataAwsccGlueCrawler#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueCrawlerLakeFormationConfiguration <a name="DataAwsccGlueCrawlerLakeFormationConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfiguration()
```


### DataAwsccGlueCrawlerRecrawlPolicy <a name="DataAwsccGlueCrawlerRecrawlPolicy" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicy()
```


### DataAwsccGlueCrawlerSchedule <a name="DataAwsccGlueCrawlerSchedule" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchedule()
```


### DataAwsccGlueCrawlerSchemaChangePolicy <a name="DataAwsccGlueCrawlerSchemaChangePolicy" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicy()
```


### DataAwsccGlueCrawlerTargets <a name="DataAwsccGlueCrawlerTargets" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargets()
```


### DataAwsccGlueCrawlerTargetsCatalogTargets <a name="DataAwsccGlueCrawlerTargetsCatalogTargets" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargets()
```


### DataAwsccGlueCrawlerTargetsDeltaTargets <a name="DataAwsccGlueCrawlerTargetsDeltaTargets" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargets()
```


### DataAwsccGlueCrawlerTargetsDynamoDbTargets <a name="DataAwsccGlueCrawlerTargetsDynamoDbTargets" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargets()
```


### DataAwsccGlueCrawlerTargetsHudiTargets <a name="DataAwsccGlueCrawlerTargetsHudiTargets" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargets()
```


### DataAwsccGlueCrawlerTargetsIcebergTargets <a name="DataAwsccGlueCrawlerTargetsIcebergTargets" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargets()
```


### DataAwsccGlueCrawlerTargetsJdbcTargets <a name="DataAwsccGlueCrawlerTargetsJdbcTargets" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargets()
```


### DataAwsccGlueCrawlerTargetsMongoDbTargets <a name="DataAwsccGlueCrawlerTargetsMongoDbTargets" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargets()
```


### DataAwsccGlueCrawlerTargetsS3Targets <a name="DataAwsccGlueCrawlerTargetsS3Targets" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3Targets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3Targets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3Targets()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference <a name="DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentials">use_lake_formation_credentials</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfiguration">DataAwsccGlueCrawlerLakeFormationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `use_lake_formation_credentials`<sup>Required</sup> <a name="use_lake_formation_credentials" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentials"></a>

```python
use_lake_formation_credentials: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCrawlerLakeFormationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerLakeFormationConfiguration">DataAwsccGlueCrawlerLakeFormationConfiguration</a>

---


### DataAwsccGlueCrawlerRecrawlPolicyOutputReference <a name="DataAwsccGlueCrawlerRecrawlPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior">recrawl_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicy">DataAwsccGlueCrawlerRecrawlPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recrawl_behavior`<sup>Required</sup> <a name="recrawl_behavior" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior"></a>

```python
recrawl_behavior: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCrawlerRecrawlPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerRecrawlPolicy">DataAwsccGlueCrawlerRecrawlPolicy</a>

---


### DataAwsccGlueCrawlerScheduleOutputReference <a name="DataAwsccGlueCrawlerScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchedule">DataAwsccGlueCrawlerSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCrawlerSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchedule">DataAwsccGlueCrawlerSchedule</a>

---


### DataAwsccGlueCrawlerSchemaChangePolicyOutputReference <a name="DataAwsccGlueCrawlerSchemaChangePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior">delete_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior">update_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicy">DataAwsccGlueCrawlerSchemaChangePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_behavior`<sup>Required</sup> <a name="delete_behavior" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior"></a>

```python
delete_behavior: str
```

- *Type:* str

---

##### `update_behavior`<sup>Required</sup> <a name="update_behavior" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior"></a>

```python
update_behavior: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCrawlerSchemaChangePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerSchemaChangePolicy">DataAwsccGlueCrawlerSchemaChangePolicy</a>

---


### DataAwsccGlueCrawlerTargetsCatalogTargetsList <a name="DataAwsccGlueCrawlerTargetsCatalogTargetsList" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference <a name="DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.property.dlqEventQueueArn">dlq_event_queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.property.eventQueueArn">event_queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.property.tables">tables</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargets">DataAwsccGlueCrawlerTargetsCatalogTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `dlq_event_queue_arn`<sup>Required</sup> <a name="dlq_event_queue_arn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.property.dlqEventQueueArn"></a>

```python
dlq_event_queue_arn: str
```

- *Type:* str

---

##### `event_queue_arn`<sup>Required</sup> <a name="event_queue_arn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.property.eventQueueArn"></a>

```python
event_queue_arn: str
```

- *Type:* str

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.property.tables"></a>

```python
tables: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCrawlerTargetsCatalogTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargets">DataAwsccGlueCrawlerTargetsCatalogTargets</a>

---


### DataAwsccGlueCrawlerTargetsDeltaTargetsList <a name="DataAwsccGlueCrawlerTargetsDeltaTargetsList" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference <a name="DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.property.createNativeDeltaTable">create_native_delta_table</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.property.deltaTables">delta_tables</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.property.writeManifest">write_manifest</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargets">DataAwsccGlueCrawlerTargetsDeltaTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `create_native_delta_table`<sup>Required</sup> <a name="create_native_delta_table" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.property.createNativeDeltaTable"></a>

```python
create_native_delta_table: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `delta_tables`<sup>Required</sup> <a name="delta_tables" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.property.deltaTables"></a>

```python
delta_tables: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `write_manifest`<sup>Required</sup> <a name="write_manifest" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.property.writeManifest"></a>

```python
write_manifest: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCrawlerTargetsDeltaTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargets">DataAwsccGlueCrawlerTargetsDeltaTargets</a>

---


### DataAwsccGlueCrawlerTargetsDynamoDbTargetsList <a name="DataAwsccGlueCrawlerTargetsDynamoDbTargetsList" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference <a name="DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanAll">scan_all</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanRate">scan_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargets">DataAwsccGlueCrawlerTargetsDynamoDbTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `scan_all`<sup>Required</sup> <a name="scan_all" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanAll"></a>

```python
scan_all: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `scan_rate`<sup>Required</sup> <a name="scan_rate" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanRate"></a>

```python
scan_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCrawlerTargetsDynamoDbTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargets">DataAwsccGlueCrawlerTargetsDynamoDbTargets</a>

---


### DataAwsccGlueCrawlerTargetsHudiTargetsList <a name="DataAwsccGlueCrawlerTargetsHudiTargetsList" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference <a name="DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.property.maximumTraversalDepth">maximum_traversal_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.property.paths">paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargets">DataAwsccGlueCrawlerTargetsHudiTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `maximum_traversal_depth`<sup>Required</sup> <a name="maximum_traversal_depth" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.property.maximumTraversalDepth"></a>

```python
maximum_traversal_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCrawlerTargetsHudiTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargets">DataAwsccGlueCrawlerTargetsHudiTargets</a>

---


### DataAwsccGlueCrawlerTargetsIcebergTargetsList <a name="DataAwsccGlueCrawlerTargetsIcebergTargetsList" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference <a name="DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.property.maximumTraversalDepth">maximum_traversal_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.property.paths">paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargets">DataAwsccGlueCrawlerTargetsIcebergTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `maximum_traversal_depth`<sup>Required</sup> <a name="maximum_traversal_depth" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.property.maximumTraversalDepth"></a>

```python
maximum_traversal_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCrawlerTargetsIcebergTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargets">DataAwsccGlueCrawlerTargetsIcebergTargets</a>

---


### DataAwsccGlueCrawlerTargetsJdbcTargetsList <a name="DataAwsccGlueCrawlerTargetsJdbcTargetsList" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference <a name="DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.property.enableAdditionalMetadata">enable_additional_metadata</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargets">DataAwsccGlueCrawlerTargetsJdbcTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `enable_additional_metadata`<sup>Required</sup> <a name="enable_additional_metadata" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.property.enableAdditionalMetadata"></a>

```python
enable_additional_metadata: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCrawlerTargetsJdbcTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargets">DataAwsccGlueCrawlerTargetsJdbcTargets</a>

---


### DataAwsccGlueCrawlerTargetsMongoDbTargetsList <a name="DataAwsccGlueCrawlerTargetsMongoDbTargetsList" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference <a name="DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargets">DataAwsccGlueCrawlerTargetsMongoDbTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCrawlerTargetsMongoDbTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargets">DataAwsccGlueCrawlerTargetsMongoDbTargets</a>

---


### DataAwsccGlueCrawlerTargetsOutputReference <a name="DataAwsccGlueCrawlerTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.catalogTargets">catalog_targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList">DataAwsccGlueCrawlerTargetsCatalogTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.deltaTargets">delta_targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList">DataAwsccGlueCrawlerTargetsDeltaTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.dynamoDbTargets">dynamo_db_targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList">DataAwsccGlueCrawlerTargetsDynamoDbTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.hudiTargets">hudi_targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList">DataAwsccGlueCrawlerTargetsHudiTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.icebergTargets">iceberg_targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList">DataAwsccGlueCrawlerTargetsIcebergTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.jdbcTargets">jdbc_targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList">DataAwsccGlueCrawlerTargetsJdbcTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.mongoDbTargets">mongo_db_targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList">DataAwsccGlueCrawlerTargetsMongoDbTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.s3Targets">s3_targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList">DataAwsccGlueCrawlerTargetsS3TargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargets">DataAwsccGlueCrawlerTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_targets`<sup>Required</sup> <a name="catalog_targets" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.catalogTargets"></a>

```python
catalog_targets: DataAwsccGlueCrawlerTargetsCatalogTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsCatalogTargetsList">DataAwsccGlueCrawlerTargetsCatalogTargetsList</a>

---

##### `delta_targets`<sup>Required</sup> <a name="delta_targets" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.deltaTargets"></a>

```python
delta_targets: DataAwsccGlueCrawlerTargetsDeltaTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDeltaTargetsList">DataAwsccGlueCrawlerTargetsDeltaTargetsList</a>

---

##### `dynamo_db_targets`<sup>Required</sup> <a name="dynamo_db_targets" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.dynamoDbTargets"></a>

```python
dynamo_db_targets: DataAwsccGlueCrawlerTargetsDynamoDbTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsDynamoDbTargetsList">DataAwsccGlueCrawlerTargetsDynamoDbTargetsList</a>

---

##### `hudi_targets`<sup>Required</sup> <a name="hudi_targets" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.hudiTargets"></a>

```python
hudi_targets: DataAwsccGlueCrawlerTargetsHudiTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsHudiTargetsList">DataAwsccGlueCrawlerTargetsHudiTargetsList</a>

---

##### `iceberg_targets`<sup>Required</sup> <a name="iceberg_targets" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.icebergTargets"></a>

```python
iceberg_targets: DataAwsccGlueCrawlerTargetsIcebergTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsIcebergTargetsList">DataAwsccGlueCrawlerTargetsIcebergTargetsList</a>

---

##### `jdbc_targets`<sup>Required</sup> <a name="jdbc_targets" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.jdbcTargets"></a>

```python
jdbc_targets: DataAwsccGlueCrawlerTargetsJdbcTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsJdbcTargetsList">DataAwsccGlueCrawlerTargetsJdbcTargetsList</a>

---

##### `mongo_db_targets`<sup>Required</sup> <a name="mongo_db_targets" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.mongoDbTargets"></a>

```python
mongo_db_targets: DataAwsccGlueCrawlerTargetsMongoDbTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsMongoDbTargetsList">DataAwsccGlueCrawlerTargetsMongoDbTargetsList</a>

---

##### `s3_targets`<sup>Required</sup> <a name="s3_targets" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.s3Targets"></a>

```python
s3_targets: DataAwsccGlueCrawlerTargetsS3TargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList">DataAwsccGlueCrawlerTargetsS3TargetsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCrawlerTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargets">DataAwsccGlueCrawlerTargets</a>

---


### DataAwsccGlueCrawlerTargetsS3TargetsList <a name="DataAwsccGlueCrawlerTargetsS3TargetsList" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueCrawlerTargetsS3TargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueCrawlerTargetsS3TargetsOutputReference <a name="DataAwsccGlueCrawlerTargetsS3TargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_crawler

dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.property.dlqEventQueueArn">dlq_event_queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.property.eventQueueArn">event_queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.property.sampleSize">sample_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3Targets">DataAwsccGlueCrawlerTargetsS3Targets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `dlq_event_queue_arn`<sup>Required</sup> <a name="dlq_event_queue_arn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.property.dlqEventQueueArn"></a>

```python
dlq_event_queue_arn: str
```

- *Type:* str

---

##### `event_queue_arn`<sup>Required</sup> <a name="event_queue_arn" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.property.eventQueueArn"></a>

```python
event_queue_arn: str
```

- *Type:* str

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `sample_size`<sup>Required</sup> <a name="sample_size" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.property.sampleSize"></a>

```python
sample_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3TargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCrawlerTargetsS3Targets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCrawler.DataAwsccGlueCrawlerTargetsS3Targets">DataAwsccGlueCrawlerTargetsS3Targets</a>

---



