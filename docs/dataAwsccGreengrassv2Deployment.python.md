# `dataAwsccGreengrassv2Deployment` Submodule <a name="`dataAwsccGreengrassv2Deployment` Submodule" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGreengrassv2Deployment <a name="DataAwsccGreengrassv2Deployment" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/greengrassv2_deployment awscc_greengrassv2_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/greengrassv2_deployment#id DataAwsccGreengrassv2Deployment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGreengrassv2Deployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGreengrassv2Deployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGreengrassv2Deployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGreengrassv2Deployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/greengrassv2_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGreengrassv2Deployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.components">components</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap">DataAwsccGreengrassv2DeploymentComponentsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.deploymentName">deployment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.deploymentPolicies">deployment_policies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference">DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.iotJobConfiguration">iot_job_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.parentTargetArn">parent_target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.targetArn">target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.components"></a>

```python
components: DataAwsccGreengrassv2DeploymentComponentsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap">DataAwsccGreengrassv2DeploymentComponentsMap</a>

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `deployment_name`<sup>Required</sup> <a name="deployment_name" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.deploymentName"></a>

```python
deployment_name: str
```

- *Type:* str

---

##### `deployment_policies`<sup>Required</sup> <a name="deployment_policies" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.deploymentPolicies"></a>

```python
deployment_policies: DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference">DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference</a>

---

##### `iot_job_configuration`<sup>Required</sup> <a name="iot_job_configuration" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.iotJobConfiguration"></a>

```python
iot_job_configuration: DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference</a>

---

##### `parent_target_arn`<sup>Required</sup> <a name="parent_target_arn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.parentTargetArn"></a>

```python
parent_target_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2Deployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGreengrassv2DeploymentComponents <a name="DataAwsccGreengrassv2DeploymentComponents" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponents.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponents()
```


### DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate <a name="DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate()
```


### DataAwsccGreengrassv2DeploymentComponentsRunWith <a name="DataAwsccGreengrassv2DeploymentComponentsRunWith" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWith"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWith.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWith()
```


### DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits <a name="DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits()
```


### DataAwsccGreengrassv2DeploymentConfig <a name="DataAwsccGreengrassv2DeploymentConfig" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/greengrassv2_deployment#id DataAwsccGreengrassv2Deployment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGreengrassv2DeploymentDeploymentPolicies <a name="DataAwsccGreengrassv2DeploymentDeploymentPolicies" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPolicies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPolicies()
```


### DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy <a name="DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy()
```


### DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy <a name="DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy()
```


### DataAwsccGreengrassv2DeploymentIotJobConfiguration <a name="DataAwsccGreengrassv2DeploymentIotJobConfiguration" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfiguration()
```


### DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig()
```


### DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct()
```


### DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig()
```


### DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate()
```


### DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria()
```


### DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference <a name="DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.merge">merge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.reset">reset</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate">DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `merge`<sup>Required</sup> <a name="merge" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.merge"></a>

```python
merge: str
```

- *Type:* str

---

##### `reset`<sup>Required</sup> <a name="reset" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.reset"></a>

```python
reset: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate">DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate</a>

---


### DataAwsccGreengrassv2DeploymentComponentsMap <a name="DataAwsccGreengrassv2DeploymentComponentsMap" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccGreengrassv2DeploymentComponentsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGreengrassv2DeploymentComponentsOutputReference <a name="DataAwsccGreengrassv2DeploymentComponentsOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.componentVersion">component_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.configurationUpdate">configuration_update</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference">DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.runWith">run_with</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference">DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponents">DataAwsccGreengrassv2DeploymentComponents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.componentVersion"></a>

```python
component_version: str
```

- *Type:* str

---

##### `configuration_update`<sup>Required</sup> <a name="configuration_update" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.configurationUpdate"></a>

```python
configuration_update: DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference">DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference</a>

---

##### `run_with`<sup>Required</sup> <a name="run_with" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.runWith"></a>

```python
run_with: DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference">DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2DeploymentComponents
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponents">DataAwsccGreengrassv2DeploymentComponents</a>

---


### DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference <a name="DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.posixUser">posix_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.systemResourceLimits">system_resource_limits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference">DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.windowsUser">windows_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWith">DataAwsccGreengrassv2DeploymentComponentsRunWith</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `posix_user`<sup>Required</sup> <a name="posix_user" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.posixUser"></a>

```python
posix_user: str
```

- *Type:* str

---

##### `system_resource_limits`<sup>Required</sup> <a name="system_resource_limits" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.systemResourceLimits"></a>

```python
system_resource_limits: DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference">DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference</a>

---

##### `windows_user`<sup>Required</sup> <a name="windows_user" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.windowsUser"></a>

```python
windows_user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2DeploymentComponentsRunWith
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWith">DataAwsccGreengrassv2DeploymentComponentsRunWith</a>

---


### DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference <a name="DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.cpus">cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits">DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpus`<sup>Required</sup> <a name="cpus" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.cpus"></a>

```python
cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits">DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits</a>

---


### DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference <a name="DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a>

---


### DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference <a name="DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a>

---


### DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference <a name="DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.componentUpdatePolicy">component_update_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference">DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.configurationValidationPolicy">configuration_validation_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference">DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.failureHandlingPolicy">failure_handling_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPolicies">DataAwsccGreengrassv2DeploymentDeploymentPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_update_policy`<sup>Required</sup> <a name="component_update_policy" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.componentUpdatePolicy"></a>

```python
component_update_policy: DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference">DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference</a>

---

##### `configuration_validation_policy`<sup>Required</sup> <a name="configuration_validation_policy" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.configurationValidationPolicy"></a>

```python
configuration_validation_policy: DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference">DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference</a>

---

##### `failure_handling_policy`<sup>Required</sup> <a name="failure_handling_policy" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.failureHandlingPolicy"></a>

```python
failure_handling_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2DeploymentDeploymentPolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentDeploymentPolicies">DataAwsccGreengrassv2DeploymentDeploymentPolicies</a>

---


### DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.failureType">failure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings">min_number_of_executed_things</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage">threshold_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `failure_type`<sup>Required</sup> <a name="failure_type" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.failureType"></a>

```python
failure_type: str
```

- *Type:* str

---

##### `min_number_of_executed_things`<sup>Required</sup> <a name="min_number_of_executed_things" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```python
min_number_of_executed_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_percentage`<sup>Required</sup> <a name="threshold_percentage" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```python
threshold_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>

---


### DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.criteriaList">criteria_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList">DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig">DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criteria_list`<sup>Required</sup> <a name="criteria_list" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.criteriaList"></a>

```python
criteria_list: DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList">DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig">DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig</a>

---


### DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute">base_rate_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor">increment_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria">rate_increase_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_rate_per_minute`<sup>Required</sup> <a name="base_rate_per_minute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute"></a>

```python
base_rate_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `increment_factor`<sup>Required</sup> <a name="increment_factor" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor"></a>

```python
increment_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_increase_criteria`<sup>Required</sup> <a name="rate_increase_criteria" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria"></a>

```python
rate_increase_criteria: DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a>

---


### DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">number_of_notified_things</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">number_of_succeeded_things</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_of_notified_things`<sup>Required</sup> <a name="number_of_notified_things" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```python
number_of_notified_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_succeeded_things`<sup>Required</sup> <a name="number_of_succeeded_things" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```python
number_of_succeeded_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---


### DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.exponentialRate">exponential_rate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">maximum_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exponential_rate`<sup>Required</sup> <a name="exponential_rate" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.exponentialRate"></a>

```python
exponential_rate: DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference</a>

---

##### `maximum_per_minute`<sup>Required</sup> <a name="maximum_per_minute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```python
maximum_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a>

---


### DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.abortConfig">abort_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.jobExecutionsRolloutConfig">job_executions_rollout_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.timeoutConfig">timeout_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfiguration">DataAwsccGreengrassv2DeploymentIotJobConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `abort_config`<sup>Required</sup> <a name="abort_config" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.abortConfig"></a>

```python
abort_config: DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference</a>

---

##### `job_executions_rollout_config`<sup>Required</sup> <a name="job_executions_rollout_config" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.jobExecutionsRolloutConfig"></a>

```python
job_executions_rollout_config: DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference</a>

---

##### `timeout_config`<sup>Required</sup> <a name="timeout_config" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.timeoutConfig"></a>

```python
timeout_config: DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference">DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2DeploymentIotJobConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfiguration">DataAwsccGreengrassv2DeploymentIotJobConfiguration</a>

---


### DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference <a name="DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_greengrassv2_deployment

dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">in_progress_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig">DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_progress_timeout_in_minutes`<sup>Required</sup> <a name="in_progress_timeout_in_minutes" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```python
in_progress_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGreengrassv2Deployment.DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig">DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig</a>

---



