# `dataAwsccRedshiftClusterParameterGroup` Submodule <a name="`dataAwsccRedshiftClusterParameterGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRedshiftClusterParameterGroup <a name="DataAwsccRedshiftClusterParameterGroup" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/redshift_cluster_parameter_group awscc_redshift_cluster_parameter_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_cluster_parameter_group

dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/redshift_cluster_parameter_group#id DataAwsccRedshiftClusterParameterGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRedshiftClusterParameterGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_cluster_parameter_group

dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_cluster_parameter_group

dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_cluster_parameter_group

dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_cluster_parameter_group

dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRedshiftClusterParameterGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRedshiftClusterParameterGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRedshiftClusterParameterGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/redshift_cluster_parameter_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRedshiftClusterParameterGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.parameterGroupFamily">parameter_group_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList">DataAwsccRedshiftClusterParameterGroupParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList">DataAwsccRedshiftClusterParameterGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `parameter_group_family`<sup>Required</sup> <a name="parameter_group_family" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.parameterGroupFamily"></a>

```python
parameter_group_family: str
```

- *Type:* str

---

##### `parameter_group_name`<sup>Required</sup> <a name="parameter_group_name" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.parameterGroupName"></a>

```python
parameter_group_name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.parameters"></a>

```python
parameters: DataAwsccRedshiftClusterParameterGroupParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList">DataAwsccRedshiftClusterParameterGroupParametersList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.tags"></a>

```python
tags: DataAwsccRedshiftClusterParameterGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList">DataAwsccRedshiftClusterParameterGroupTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRedshiftClusterParameterGroupConfig <a name="DataAwsccRedshiftClusterParameterGroupConfig" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_cluster_parameter_group

dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/redshift_cluster_parameter_group#id DataAwsccRedshiftClusterParameterGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRedshiftClusterParameterGroupParameters <a name="DataAwsccRedshiftClusterParameterGroupParameters" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_cluster_parameter_group

dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParameters()
```


### DataAwsccRedshiftClusterParameterGroupTags <a name="DataAwsccRedshiftClusterParameterGroupTags" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_cluster_parameter_group

dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRedshiftClusterParameterGroupParametersList <a name="DataAwsccRedshiftClusterParameterGroupParametersList" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_cluster_parameter_group

dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRedshiftClusterParameterGroupParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRedshiftClusterParameterGroupParametersOutputReference <a name="DataAwsccRedshiftClusterParameterGroupParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_cluster_parameter_group

dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.property.parameterValue">parameter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParameters">DataAwsccRedshiftClusterParameterGroupParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRedshiftClusterParameterGroupParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupParameters">DataAwsccRedshiftClusterParameterGroupParameters</a>

---


### DataAwsccRedshiftClusterParameterGroupTagsList <a name="DataAwsccRedshiftClusterParameterGroupTagsList" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_cluster_parameter_group

dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRedshiftClusterParameterGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRedshiftClusterParameterGroupTagsOutputReference <a name="DataAwsccRedshiftClusterParameterGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_redshift_cluster_parameter_group

dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTags">DataAwsccRedshiftClusterParameterGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRedshiftClusterParameterGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftClusterParameterGroup.DataAwsccRedshiftClusterParameterGroupTags">DataAwsccRedshiftClusterParameterGroupTags</a>

---



